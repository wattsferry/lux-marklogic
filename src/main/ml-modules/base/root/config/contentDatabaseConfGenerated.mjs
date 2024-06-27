const contentDatabaseConfGenerated = {
  "stemmed-searches": "off",
  "word-searches": false,
  "field-value-searches": false,
  "field-value-positions": false,
  "fast-phrase-searches": false,
  "fast-case-sensitive-searches": false,
  "fast-diacritic-sensitive-searches": false,
  "trailing-wildcard-searches": false,
  "trailing-wildcard-word-positions": false,
  "three-character-searches": false,
  "three-character-word-positions": false,
  "two-character-searches": false,
  "one-character-searches": false,
  "word-positions": true,
  "element-word-positions": false,
  "fast-element-trailing-wildcard-searches": false,
  "word-lexicon": [],
  "range-element-index": [],
  "range-path-index": [],
  "assignment-policy": {
    "assignment-policy-name": "bucket"
  },
  "field": [
    {
      "field-name": "",
      "include-root": true,
      "excluded-element": [
        {
          "namespace-uri": "",
          "localname": "_label",
          "attribute-namespace-uri": "",
          "attribute-localname": "",
          "attribute-value": ""
        },
        {
          "namespace-uri": "",
          "localname": "id",
          "attribute-namespace-uri": "",
          "attribute-localname": "",
          "attribute-value": ""
        }
      ]
    },
    {
      "field-name": "anySortName",
      "field-path": [
        {
          "path": "/json/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300451544']/content",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "anySortNameEn",
      "field-path": [
        {
          "path": "/json/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300451544'][./language/equivalent/id='http://vocab.getty.edu/aat/300388277']/content",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "anySortNameFr",
      "field-path": [
        {
          "path": "/json/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300451544'][./language/equivalent/id='http://vocab.getty.edu/aat/300388306']/content",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "anySortNameZh",
      "field-path": [
        {
          "path": "/json/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300451544'][./language/equivalent/id='http://vocab.getty.edu/aat/300388113']/content",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "referenceName",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person', 'Place', 'Activity', 'Period', 'Type', 'Language', 'MeasurementUnit')]/identified_by[./type='Name']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "referencePrimaryName",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person', 'Place', 'Activity', 'Period', 'Type', 'Language', 'MeasurementUnit')]/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300404670']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "referenceAnyText",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person', 'Place', 'Activity', 'Period', 'Type', 'Language', 'MeasurementUnit')]//content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "referenceTypeId",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person', 'Place', 'Activity', 'Period', 'Type', 'Language', 'MeasurementUnit')]/classified_as/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "referenceIdentifier",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person', 'Place', 'Activity', 'Period', 'Type', 'Language', 'MeasurementUnit')]/identified_by[./type='Identifier']/content",
          "weight": 1
        },
        {
          "path": "/json[type = ('Group', 'Person', 'Place', 'Activity', 'Period', 'Type', 'Language', 'MeasurementUnit')]/equivalent/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "setPrimaryName",
      "field-path": [
        {
          "path": "/json[type = ('Set')]/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300404670']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "setAnyText",
      "field-path": [
        {
          "path": "/json[type = ('Set')]//content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "setTypeId",
      "field-path": [
        {
          "path": "/json[type = ('Set')]/classified_as/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "setUsedForId",
      "field-path": [
        {
          "path": "/json[type = ('Set')]/used_for/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "setIdentifier",
      "field-path": [
        {
          "path": "/json[type = ('Set')]/identified_by[./type='Identifier']/content",
          "weight": 1
        },
        {
          "path": "/json[type = ('Set')]/equivalent/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentAnyText",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]//content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "agentName",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/identified_by[./type='Name']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "agentPrimaryName",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300404670']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "agentIdentifier",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/identified_by[./type='Identifier']/content",
          "weight": 1
        },
        {
          "path": "/json[type = ('Group', 'Person')]/equivalent/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentActiveStartDateStr",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/carried_out/timespan/begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "agentActiveStartDateFloat",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/carried_out/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "agentActiveEndDateFloat",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/carried_out/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "agentActivePlaceId",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/carried_out/took_place_at/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentBornStartDateStr",
      "field-path": [
        {
          "path": "/json[type='Person']/born/timespan/begin_of_the_begin",
          "weight": 1
        },
        {
          "path": "/json[type='Group']/formed_by/timespan/begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "agentBornStartDateFloat",
      "field-path": [
        {
          "path": "/json[type='Person']/born/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        },
        {
          "path": "/json[type='Group']/formed_by/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "agentBornEndDateFloat",
      "field-path": [
        {
          "path": "/json[type='Person']/born/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        },
        {
          "path": "/json[type='Group']/formed_by/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "agentStartPlaceId",
      "field-path": [
        {
          "path": "/json[type='Person']/born/took_place_at/id",
          "weight": 1
        },
        {
          "path": "/json[type='Group']/formed_by/took_place_at/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentDataTypeName",
      "field-path": [
        {
          "path": "/indexedProperties[dataType=('Person', 'Group')]/dataType",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "agentDiedStartDateStr",
      "field-path": [
        {
          "path": "/json[type='Person']/died/timespan/begin_of_the_begin",
          "weight": 1
        },
        {
          "path": "/json[type='Group']/dissolved_by/timespan/begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "agentDiedStartDateFloat",
      "field-path": [
        {
          "path": "/json[type='Person']/died/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        },
        {
          "path": "/json[type='Group']/dissolved_by/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "agentDiedEndDateFloat",
      "field-path": [
        {
          "path": "/json[type='Person']/died/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        },
        {
          "path": "/json[type='Group']/dissolved_by/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "agentEndPlaceId",
      "field-path": [
        {
          "path": "/json[type='Person']/died/took_place_at/id",
          "weight": 1
        },
        {
          "path": "/json[type='Group']/dissolved_by/took_place_at/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentFounderId",
      "field-path": [
        {
          "path": "/json[type='Group']/formed_by/carried_out_by/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentTypeId",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/classified_as/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentNationalityId",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/classified_as[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300379842']/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentOccupationId",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/classified_as[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300263369']/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentGenderId",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/classified_as[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300055147']/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentMemberOfId",
      "field-path": [
        {
          "path": "/json[type = ('Group', 'Person')]/member_of/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentHasDigitalImageBoolean",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('Group', 'Person')]/hasDigitalImage",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "agentProfessionalActivityId",
      "field-path": [
        {
          "path": "/json/carried_out[./classified_as[1]/equivalent/id='http://vocab.getty.edu/aat/300393177']/classified_as[2]/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemArchiveSortId",
      "field-path": [
        {
          "path": "/json[type = ('HumanMadeObject', 'DigitalObject')]/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300451544']/content",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemDataTypeName",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('HumanMadeObject', 'DigitalObject')]/dataType",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "itemHasDigitalImageBoolean",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('HumanMadeObject', 'DigitalObject')]/hasDigitalImage",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemIsOnlineBoolean",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('HumanMadeObject', 'DigitalObject')]/isOnline",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemAnyText",
      "field-path": [
        {
          "path": "/json[type = ('HumanMadeObject', 'DigitalObject')]//content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "itemName",
      "field-path": [
        {
          "path": "/json[type = ('HumanMadeObject', 'DigitalObject')]/identified_by[./type='Name']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "itemPrimaryName",
      "field-path": [
        {
          "path": "/json[type = ('HumanMadeObject', 'DigitalObject')]/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300404670']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "itemIdentifier",
      "field-path": [
        {
          "path": "/json[type = ('HumanMadeObject', 'DigitalObject')]/identified_by[./type='Identifier']/content",
          "weight": 1
        },
        {
          "path": "/json[type = ('HumanMadeObject', 'DigitalObject')]/equivalent/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemTypeId",
      "field-path": [
        {
          "path": "/json[type = ('HumanMadeObject', 'DigitalObject')]/classified_as/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemMaterialId",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/made_of/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemDimensionValue",
      "field-path": [
        {
          "path": "/json[type = ('HumanMadeObject', 'DigitalObject')]/dimension/value",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "itemHeightDimensionValue",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/dimension[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300055644']/value",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "itemWidthDimensionValue",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/dimension[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300055647']/value",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "itemDepthDimensionValue",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/dimension[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300072633']/value",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "itemEncounteredStartDateFloat",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/encountered_by/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "itemEncounteredEndDateFloat",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/encountered_by/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "itemEncounteredStartDateStr",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/encountered_by/timespan/begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "itemProductionStartDateStr",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/produced_by/timespan/begin_of_the_begin",
          "weight": 1
        },
        {
          "path": "/json[type = 'DigitalObject']/created_by/timespan/begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "itemProductionStartDateFloat",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/produced_by/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        },
        {
          "path": "/json[type = 'DigitalObject']/created_by/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "itemProductionEndDateFloat",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/produced_by/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        },
        {
          "path": "/json[type = 'DigitalObject']/created_by/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "itemEncounteredPlaceId",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/encountered_by/took_place_at/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemProductionPlaceId",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/produced_by/took_place_at/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'HumanMadeObject']/produced_by/part/took_place_at/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'DigitalObject']/created_by/took_place_at/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'DigitalObject']/created_by/part/took_place_at/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemEncounteredAgentId",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/encountered_by/carried_out_by/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemProductionAgentId",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/produced_by/carried_out_by/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'HumanMadeObject']/produced_by/part/carried_out_by/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'DigitalObject']/created_by/carried_out_by/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'DigitalObject']/created_by/part/carried_out_by/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemProductionTechniqueId",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/produced_by/technique/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'HumanMadeObject']/produced_by/part/technique/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemCarriedById",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/carries/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'DigitalObject']/digitally_carries/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemShownById",
      "field-path": [
        {
          "path": "/json[type = 'HumanMadeObject']/shows/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'DigitalObject']/digitally_shows/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "itemMemberOfId",
      "field-path": [
        {
          "path": "/json[type = ('HumanMadeObject', 'DigitalObject')]/member_of/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "isCollectionItemBoolean",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('HumanMadeObject', 'DigitalObject', 'VisualItem', 'LinguisticObject')]/isCollectionItem",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workArchiveSortId",
      "field-path": [
        {
          "path": "/json[type = 'Set']/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300451544']/content",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workDataTypeName",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('VisualItem', 'LinguisticObject')]/dataType",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "workHasDigitalImageBoolean",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('VisualItem', 'LinguisticObject')]/hasDigitalImage",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workIsOnlineBoolean",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('VisualItem', 'LinguisticObject')]/isOnline",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workIsPublicDomainBoolean",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('VisualItem', 'LinguisticObject')]/isPublicDomain",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workAnyText",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]//content",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][./classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']//content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "workName",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/identified_by[./type='Name']/content",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][./classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/identified_by[./type='Name']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "workPrimaryName",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300404670']/content",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][./classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300404670']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "workIdentifier",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/identified_by[./type='Identifier']/content",
          "weight": 1
        },
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/equivalent/id",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][./classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/identified_by[./type='Identifier']/content",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][./classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/equivalent/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workTypeId",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/classified_as/id",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/classified_as/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workLanguageId",
      "field-path": [
        {
          "path": "/json[type = 'LinguisticObject']/language/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workAboutPlaceId",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/about[./type = 'Place']/id",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/about[./type = 'Place']/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'VisualItem']/represents[./type = 'Place']/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workAboutAgentId",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/about[./type = ('Person', 'Group')]/id",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/about[./type = ('Person', 'Group')]/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'VisualItem']/represents[./type = ('Person','Group')]/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workAboutConceptId",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/about[./type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/id",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/about[./type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/id",
          "weight": 1
        },
        {
          "path": "/json[type = 'VisualItem']/represents[./type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workPartOfId",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/part_of/id",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/member_of/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workPublicationStartDateStr",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/used_for/timespan/begin_of_the_begin",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/used_for/timespan/begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "workPublicationStartDateFloat",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/used_for/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/used_for/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "workPublicationEndDateFloat",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/used_for/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/used_for/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "workPublicationPlaceId",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/used_for/took_place_at/id",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/used_for/took_place_at/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workPublicationAgentId",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/used_for/carried_out_by/id",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/used_for/carried_out_by/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workCreationStartDateStr",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/created_by/timespan/begin_of_the_begin",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/created_by/timespan/begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "workCreationStartDateFloat",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/created_by/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/created_by/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "workCreationEndDateFloat",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/created_by/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/created_by/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "workCreationPlaceId",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/created_by/took_place_at/id",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/created_by/took_place_at/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "workCreationAgentId",
      "field-path": [
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/created_by/carried_out_by/id",
          "weight": 1
        },
        {
          "path": "/json[type = ('VisualItem', 'LinguisticObject')]/created_by/part/carried_out_by/id",
          "weight": 1
        },
        {
          "path": "/json[type='Set'][classified_as/equivalent/id='http://vocab.getty.edu/aat/300375748']/created_by/carried_out_by/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "placeHasDigitalImageBoolean",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = 'Place']/hasDigitalImage",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "placeAnyText",
      "field-path": [
        {
          "path": "/json[type = 'Place']//content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "placeName",
      "field-path": [
        {
          "path": "/json[type = 'Place']/identified_by[./type='Name']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "placePrimaryName",
      "field-path": [
        {
          "path": "/json[type = 'Place']/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300404670']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "placeIdentifier",
      "field-path": [
        {
          "path": "/json[type = 'Place']/identified_by[./type='Identifier']/content",
          "weight": 1
        },
        {
          "path": "/json[type = 'Place']/equivalent/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "placeTypeId",
      "field-path": [
        {
          "path": "/json[type = 'Place']/classified_as/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "placePartOfId",
      "field-path": [
        {
          "path": "/json[type = 'Place']/part_of/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "placeSpatial",
      "field-path": [
        {
          "path": "/json[type = 'Place']/defined_by",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "conceptHasDigitalImageBoolean",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/hasDigitalImage",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "conceptAnyText",
      "field-path": [
        {
          "path": "/json[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]//content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "conceptDataTypeName",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/dataType",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "conceptName",
      "field-path": [
        {
          "path": "/json[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/identified_by[./type='Name']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "conceptPrimaryName",
      "field-path": [
        {
          "path": "/json[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300404670']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "conceptIdentifier",
      "field-path": [
        {
          "path": "/json[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/identified_by[./type='Identifier']/content",
          "weight": 1
        },
        {
          "path": "/json[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/equivalent/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "conceptTypeId",
      "field-path": [
        {
          "path": "/json[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/classified_as/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "conceptPartOfId",
      "field-path": [
        {
          "path": "/json[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/broader/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "conceptInfluencedByAgentId",
      "field-path": [
        {
          "path": "/json[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/created_by/influenced_by[type = ('Person', 'Group')]/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "conceptInfluencedByConceptId",
      "field-path": [
        {
          "path": "/json[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/created_by/influenced_by[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "conceptInfluencedByEventId",
      "field-path": [
        {
          "path": "/json[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/created_by/influenced_by[type = ('Activity', 'Period')]/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "conceptInfluencedByPlaceId",
      "field-path": [
        {
          "path": "/json[type = ('Type', 'MeasurementUnit', 'Language', 'Currency', 'Material')]/created_by/influenced_by[type = ('Place')]/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "languageIdentifier",
      "field-path": [
        {
          "path": "/json[type='Language']/identified_by[./type='Identifier']/content",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "eventAnyText",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]//content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "eventDataTypeName",
      "field-path": [
        {
          "path": "/indexedProperties[dataType = ('Activity', 'Period')]/dataType",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "eventName",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/identified_by[./type='Name']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "eventPrimaryName",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/identified_by[./classified_as/equivalent/id='http://vocab.getty.edu/aat/300404670']/content",
          "weight": 1
        }
      ],
      "stemmed-searches": "basic",
      "word-searches": true,
      "field-value-searches": true,
      "field-value-positions": true,
      "fast-phrase-searches": true,
      "fast-case-sensitive-searches": true,
      "fast-diacritic-sensitive-searches": true,
      "trailing-wildcard-searches": true,
      "trailing-wildcard-word-positions": true,
      "three-character-searches": true,
      "three-character-word-positions": true
    },
    {
      "field-name": "eventIdentifier",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/identified_by[./type='Identifier']/content",
          "weight": 1
        },
        {
          "path": "/json[type= ('Activity', 'Period')]/equivalent/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "eventTypeId",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/classified_as/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "eventInitiatedStartDateStr",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/timespan/begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "eventInitiatedStartDateFloat",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/timespan/_seconds_since_epoch_begin_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "eventInitiatedEndDateFloat",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/timespan/_seconds_since_epoch_end_of_the_begin",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "eventCompletedStartDateStr",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/timespan/begin_of_the_end",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "eventCompletedStartDateFloat",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/timespan/_seconds_since_epoch_begin_of_the_end",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "eventCompletedEndDateFloat",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/timespan/_seconds_since_epoch_end_of_the_end",
          "weight": 1
        }
      ]
    },
    {
      "field-name": "eventAgentId",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/carried_out_by/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "eventPlaceId",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/took_place_at/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    },
    {
      "field-name": "eventUsedItemId",
      "field-path": [
        {
          "path": "/json[type= ('Activity', 'Period')]/used_for/id",
          "weight": 1
        }
      ],
      "field-value-searches": true
    }
  ],
  "range-field-index": [
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "anySortName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "anySortNameEn",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "anySortNameFr",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "anySortNameZh",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "referenceName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "referencePrimaryName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "referenceTypeId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "referenceIdentifier",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "setPrimaryName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "setTypeId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "setUsedForId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "setIdentifier",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentPrimaryName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentIdentifier",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentActiveStartDateStr",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "agentActiveStartDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "agentActiveEndDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentActivePlaceId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentBornStartDateStr",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "agentBornStartDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "agentBornEndDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentStartPlaceId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentDataTypeName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentDiedStartDateStr",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "agentDiedStartDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "agentDiedEndDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentEndPlaceId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentFounderId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentTypeId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentNationalityId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentOccupationId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentGenderId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentMemberOfId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "agentHasDigitalImageBoolean",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "agentProfessionalActivityId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemArchiveSortId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemDataTypeName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "itemHasDigitalImageBoolean",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "itemIsOnlineBoolean",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemIdentifier",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemTypeId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemMaterialId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "itemDimensionValue",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "itemHeightDimensionValue",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "itemWidthDimensionValue",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "itemDepthDimensionValue",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "itemEncounteredStartDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "itemEncounteredEndDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemEncounteredStartDateStr",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemProductionStartDateStr",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "itemProductionStartDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "itemProductionEndDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemEncounteredPlaceId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemProductionPlaceId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemEncounteredAgentId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemProductionAgentId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemProductionTechniqueId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemCarriedById",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemShownById",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "itemMemberOfId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "isCollectionItemBoolean",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workArchiveSortId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workDataTypeName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "workHasDigitalImageBoolean",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "workIsOnlineBoolean",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "workIsPublicDomainBoolean",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workIdentifier",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workTypeId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workLanguageId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workAboutPlaceId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workAboutAgentId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workAboutConceptId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workPartOfId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workPublicationStartDateStr",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "workPublicationStartDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "workPublicationEndDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workPublicationPlaceId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workPublicationAgentId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workCreationStartDateStr",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "workCreationStartDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "workCreationEndDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workCreationPlaceId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "workCreationAgentId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "placeHasDigitalImageBoolean",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "placeName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "placePrimaryName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "placeIdentifier",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "placeTypeId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "placePartOfId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "conceptHasDigitalImageBoolean",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "conceptDataTypeName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "conceptName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "conceptPrimaryName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "conceptIdentifier",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "conceptTypeId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "conceptPartOfId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "conceptInfluencedByAgentId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "conceptInfluencedByConceptId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "conceptInfluencedByEventId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "conceptInfluencedByPlaceId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "languageIdentifier",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "eventDataTypeName",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "eventIdentifier",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "eventTypeId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "eventInitiatedStartDateStr",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "eventInitiatedStartDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "eventInitiatedEndDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "eventCompletedStartDateStr",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "",
      "field-name": "eventCompletedStartDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "",
      "field-name": "eventCompletedEndDateFloat",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "float"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "eventAgentId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "eventPlaceId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    },
    {
      "collation": "http://marklogic.com/collation/codepoint",
      "field-name": "eventUsedItemId",
      "range-value-positions": false,
      "invalid-values": "ignore",
      "scalar-type": "string"
    }
  ]
}

const fieldPaths = contentDatabaseConfGenerated.field.reduce(
  (fieldPathsObj, current) => {
    if (current['field-name'] && current['field-path']) {
      const { 'field-name': fieldName, 'field-path': fieldPath } = current;
      fieldPathsObj[fieldName] = fieldPath.map((pathObj) => pathObj.path);
    }
    return fieldPathsObj;
  },
  {}
);

export { fieldPaths };
