/*
 * *Partially* checks for:
 *
 *   1. Fields and field range indexes the code is dependent on but not defined by the database.
 *   2. Fields and field range indexes the code is not dependent on but are defined by the database.
 *
 * Known limitations:
 *
 *   1. Excludes value of the fullTextSearchRelatedFieldName property (for keyword search).
 *   2. Excludes indexes referenced in data constant configuration files, specifically the call to
 *      cts.fieldReference('languageIdentifier') from within languages.mjs.
 *   3. Excludes references in the configuration of Similar search terms.  Technically, Similar does
 *      not use the indexes but instead snags XPath expressions from the index configuration; thus,
 *      unless/until Similar can get the XPaths elsewhere, the associated indexes are required.
 *
 * Individual field and field range index settings are not checked.
 */

/*
 * COLLECT: CONFIGURED
 */

const databaseName = 'lux-content';
const includeAutoComplete = true;

const admin = require('/MarkLogic/admin.xqy');
const config = admin.getConfiguration();

const configuredFieldNames = [];
let nodes = admin
  .databaseGetFields(config, xdmp.database(databaseName))
  .toArray();
nodes.forEach((node) => {
  const name = node.xpath('field-name/text()').toString();
  if (name.length > 0) {
    configuredFieldNames.push(name);
  }
});

const configuredFieldRangeNames = [];
nodes = admin
  .databaseGetRangeFieldIndexes(config, xdmp.database(databaseName))
  .toArray();
nodes.forEach((node) => {
  const name = node.xpath('field-name/text()').toString();
  if (name.length > 0) {
    configuredFieldRangeNames.push(name);
  }
});

/*
 * COLLECT: REFERENCED
 */

import * as utils from '/utils/utils.mjs';
import {
  getConfigurationByContext,
  getContextParameterValues,
} from '../config/autoCompleteConfig.mjs';
import { FACETS_CONFIG } from '../../config/facetsConfig.mjs';
import { SEARCH_TERM_CONFIG } from '../../config/searchTermConfig.mjs';
import { SORT_BINDINGS } from '../../config/searchResultsSortConfig.mjs';

const referenced = {
  fields: {},
  fieldRanges: {},
};

const recordReference = (name, isRange, context) => {
  const typeKey = isRange ? 'fieldRanges' : 'fields';
  if (!referenced[typeKey][name]) {
    referenced[typeKey][name] = [context];
  } else if (!referenced[typeKey][name].includes(context)) {
    referenced[typeKey][name].push(context);
  }
};

if (includeAutoComplete) {
  const recordAutoCompleteReference = (name) => {
    if (name != null) {
      recordReference(name, true, 'auto complete');
      if (name.includes('Primary')) {
        recordReference(name.replace('Primary', ''), true, 'auto complete');
      }
    }
  };

  getContextParameterValues().forEach((autoCompleteContext) => {
    const autoCompleteConfig = getConfigurationByContext(autoCompleteContext);
    recordAutoCompleteReference(autoCompleteConfig.namesIndexReference);
    if (utils.isNonEmptyArray(autoCompleteConfig.idsIndexReferences)) {
      autoCompleteConfig.idsIndexReferences.forEach((name) => {
        recordAutoCompleteReference(name);
      });
    }
  });
}

Object.keys(FACETS_CONFIG).forEach((key) => {
  recordReference(FACETS_CONFIG[key].indexReference, true, 'facet');
});

Object.keys(SORT_BINDINGS).forEach((key) => {
  recordReference(SORT_BINDINGS[key].indexReference, true, 'sort');
});

Object.keys(SEARCH_TERM_CONFIG).forEach((searchScope) => {
  Object.keys(SEARCH_TERM_CONFIG[searchScope]).forEach((termName) => {
    const term = SEARCH_TERM_CONFIG[searchScope][termName];
    if (term.indexReferences) {
      term.indexReferences.forEach((name) => {
        const isRange =
          !name.endsWith('Text') &&
          !name.endsWith('Name') &&
          name != 'placeSpatial';
        recordReference(name, isRange, 'search');
      });
    }
    if (term.idIndexReferences) {
      term.idIndexReferences.forEach((name) => {
        recordReference(name, true, 'search');
      });
    }
  });
});

const referencedFieldRangeNames = Object.keys(referenced.fieldRanges).sort();
let referencedFieldNames = Object.keys(referenced.fields);
// A field range index cannot exist without a field, but the code may only use the field range index.
referencedFieldRangeNames.forEach((name) => {
  if (!referencedFieldNames.includes(name)) {
    referencedFieldNames.push(name);
  }
});
referencedFieldNames = referencedFieldNames.sort();

/*
 * COMPARE
 */

// const configuredFieldsNotAlsoRanges = utils.getArrayDiff(configuredFieldNames, configuredFieldRangeNames).sort()
// const referencedFieldsNotAlsoRanges = utils.getArrayDiff(referencedFieldNames, referencedFieldRangeNames).sort()

const missingFields = utils
  .getArrayDiff(referencedFieldNames, configuredFieldNames)
  .sort();
const unusedFields = utils
  .getArrayDiff(configuredFieldNames, referencedFieldNames)
  .sort();

const missingFieldRanges = utils
  .getArrayDiff(referencedFieldRangeNames, configuredFieldRangeNames)
  .sort();
const unusedFieldRanges = utils
  .getArrayDiff(configuredFieldRangeNames, referencedFieldRangeNames)
  .sort();

const results = {
  missing: {
    fields: missingFields,
    fieldRanges: missingFieldRanges,
  },
  unused: {
    fields: unusedFields,
    fieldRanges: unusedFieldRanges,
  },
};

results;
