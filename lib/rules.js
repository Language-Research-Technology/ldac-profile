const { validateEntity, resolveType } = require('./validator');

const { CollectionProfileUrl, ObjectProfileUrl } = require('./constants');

function isValidUrl(urlStr) {
  try {
    let url = new URL(urlStr);
    return true;
  } catch (e) {}
  return false;
}

const Common = {
  '@id': {
    clause:
      'MUST have an @id property and the value must be a valid URI or "./"',
    validate: function ({ error }, id) {
      if (id) {
        if (!isValidUrl(id) && id != './')
          error('The value of @id is not a valid URI');
      } else {
        error('There is no @id property');
      }
    },
  },
  name: {
    clause:
      'MUST have a single name value which is a string with one or more characters',
    validate: function ({ error }, name) {
      if (name && name.length) {
        if (name.length > 1) error('There is more than one name');
        else {
          if (typeof name[0] !== 'string') error('Value is not a string');
          else if (name[0].length === 0)
            error('Value must have one or more characters');
        }
      } else {
        error('There is no name property');
      }
    },
  },
  license: {
    clause:
      'MUST have a `license` property which has a value which references a DataReuseLicense entity@id which is a URL and which ',
    // TODO:  this SHOULD reference a CreativeWork which MAY be a DataReuseLicense – this may be used by repository software for retrieval of a resource
    validate: function ({ error, info, results }, values, entity, crate) {
      for (let v of values) {
        if (!isValidUrl(v['@id'])) {
          error(`License @id is not a URL: ${JSON.stringify(v)}`);
        }
      }
    },
  },
  language: {
    clause:
      'MAY have a `language` property which is a reference to one or more Language items',
    validate: function ({ error, info, results }, values, entity, crate) {
      if (!values || !values.length) {
        info('Does not have a `language` property');
        return;
      }
      info('Does have a `language` property');
      for (let lg of values) {
        validateEntity(rules.Language, lg, crate, results);
      }
    },
  },
};

const Dataset = {
  '@type': {
    clause:
      'MUST include a "Dataset" and either a `RepositoryCollection` or `RepositoryObject`',
    validate: function ({ error, info, warn, results }, values, entity, crate) {
      var type;
      const types = new Set(values);
      if (!types.has('Dataset')) error(' MUST include a "Dataset"');
      if (types.has('RepositoryCollection')) type = 'RepositoryCollection';
      if (types.has('RepositoryObject')) {
        if (type) {
          error(
            'MUST NOT include both “RepositoryCollection” and “RepositoryObject”'
          );
        } else {
          type = 'RepositoryObject';
        }
      }
      if (!type) {
        error(
          'MUST include either “RepositoryCollection” or “RepositoryObject”'
        );
        type = 'Common';
      }
      // Some overall rules

      Dataset._propertyNames.validate(
        { results, error, warn, info },
        null,
        null,
        crate
      );
      validateEntity(rules[type], entity, crate, results);
    },
  },
  _propertyNames: {
    clause:
      'All property names used with the crate SHOULD resolve using the supplied context',
    validate: function ({ results, error, warn, info }, prop, entity, crate) {
      const propsSeen = {};
      for (let item of crate.getGraph()) {
        for (let prop of Object.keys(item)) {
          if (!propsSeen[prop] && !['@id', '@type'].includes(prop)) {
            if (!crate.resolveTerm(prop)) {
              warn(
                `Property \`${prop}\` is not defined in the crate's context`
              );
            }
          }
          propsSeen[prop] = true;
        }
      }
    },
  },

  datePublished: {
    //cardinality: '1',
    clause:
      'MUST have  a `datePublished` property (per RO-Crate) exactly one value which is a string that parses as ISO-8601 to the level of at least a year. E.g.: 2000, 2000-10, 2000-10-01T12:34:56+10',
    validate: function ({ error }, datePublished) {
      if (
        !datePublished ||
        !datePublished.length === 1 ||
        isNaN(Date.parse(datePublished[0]))
      ) {
        error();
      }
    },
  },
  conformsTo: {
    clause:
      'MUST have a conformsTo which references the profile URL for either Collection or Object but not both',
    validate: function ({ error }, values, entity, crate) {
      if (!values || !values.length)
        return error('Does not have conformsTo' + values);
      var urls = new Set(values.map((e) => e['@id']));
      if (urls.has(CollectionProfileUrl) && urls.has(ObjectProfileUrl))
        error('Cannot have both Collection and Object profiles');
      else if (!urls.has(CollectionProfileUrl) && !urls.has(ObjectProfileUrl))
        error('Does not conform to this profile');
    },
  },
  publisher: {
    clause:
      'MUST have a `publisher` property (per RO-Crate) which MUST be have an ID which is a URL\n',
    validate({ error, info, results }, values) {
      if (!values || !values.length) {
        error('Does not have a Publisher');
        return;
      }
      if (!isValidUrl(values[0]['@id'])) error('Publisher @id is not a URL');
    },
  },
  author: {
    clause:
      'MUST have a list of at least one Person or Organization item as author',
    validate() {},
  },
};
const RepositoryCollection = {
  '@id': Common['@id'],
  '@type': {
    clause:
      'MUST have a type value of “RepositoryCollection” and MUST NOT have a type of “RepositoryObject”',
    validate: function ({ error }, values) {
      const types = new Set(values);
      if (!types.has('RepositoryCollection'))
        error('@type MUST include “RepositoryCollection”');
      if (types.has('RepositoryObject'))
        error('@type MUST NOT include “RepositoryObject”');
    },
  },
  name: Common.name,

  conformsTo: {
    clause:
      'MUST have a conformsTo which references the Collection profile URL',
    validate: function ({ error }, values, entity, crate) {
      if (!values || !values.length) return error('Does not have conformsTo ');
      var urls = new Set(values.map((e) => e['@id']));
      if (!urls.has(CollectionProfileUrl)) error();
      if (urls.has(ObjectProfileUrl)) error('MUST NOT have Object profile');
    },
  },
  datePublished: Dataset.datePublished,
  description: {
    clause:
      'MUST have at least one `description` value which is a string with one or more characters',
    validate: function ({ error }, description) {
      if (!description || !description.length || !description[0].length)
        error();
    },
  },
  license: Common.license,
  publisher: Dataset.publisher,
  hasMember: {
    clause:
      'MAY have one or more references to Collection or Object entities, which may be included in the crate or have MUST have @id properties which are URIs',
    validate({ error, info, results }, values, entity, crate) {
      if (!values || !values.length) return info();
      for (const member of values) {
        const id = member['@id'];
        // TODO - complain if no ID
        if (id && crate.getItem(id)) {
          const mem = crate.getEntity(id);
          if (mem) {
            let type =
              resolveType(['RepositoryCollection', 'RepositoryObject'], mem) ||
              'Common';

            if (!type)
              error(
                `Embedded entities in hasMember MUST include either one of “RepositoryCollection” or “RepositoryObject” (${id} does not)`
              );

            validateEntity(rules[type], member, crate, results);
            // rules;
          }
        } else {
          if (!isValidUrl(member['@id']))
            error(
              `hasMember @id is not in this crate and is not a URL (${id}) `
            );
        }
      }
    },
  },
  modality: {
    clause:
      'MAY have a `modality` property which SHOULD be a reference to one or more of the Language Data Commons Modality Terms: SpokenLanguage,  WrittenLanguage,  Song,  Gesture,  SignLanguage,  WhistledLanguage (this information may be summarisable from collection members)',
    validate({ error, info, warn, results }, values, entity, crate) {
      if (!values || values.length === 0) {
        info('Does not have a modality property');
        return;
      }
      modalities = [
        'http://purl.archive.org/language-data-commons/terms#SpokenLanguage',
        'http://purl.archive.org/language-data-commons/terms#WrittenLanguage',
        'http://purl.archive.org/language-data-commons/terms#Song',
        'http://purl.archive.org/language-data-commons/terms#Gesture',
        'http://purl.archive.org/language-data-commons/terms#SignLanguage',
        'http://purl.archive.org/language-data-commons/terms#WhistledLanguage',
      ];

      info('DOES have a `modality` property');
      for (m of values) {
        if (!modalities.includes(m['@id'])) {
          warn(`Modality value is not expected: ${JSON.stringify(m)}`);
        }
      }
    },
  },

  linguisticGenre: {
    clause:
      'MAY have a `linguisticGenre` property which is a reference to one or more of the Langauge Data Commons LinguistGenre Terms:  Formulaic, Thesaurus, Dialogue, Oratory, Report, Ludic, Procedural, Narrative, Interview, Drama, Informational (this information may be summarisable from collection members)',
    validate({ error, info, results }, values) {
      if (!values || !values.length) {
        info('Does not have a linguistic genre');
        return;
      }
      report('DOES have a `linguisticGenre` property');
      // TODO: Validate it
    },
  },

  language: Common.language,
};

const LanguageDataTypes = {
  // Optional Data types for distinguishing between materials
  PrimaryMaterial: {
    clause:
      'SHOULD have a hasPart referencing an item of @type File with an addition @type value  of PrimaryMaterial',
  },
  Annotation: {
    clause:
      'MAY have a hasPart referencing an item of @type File with an addition @type value  of Annotation',
  },
  DerivedMaterial: {
    clause:
      'MAY have a hasPart referencing an item of @type File with an addition @type value  of DerivedMaterial',
  },
};

const RepositoryObject = {
  conformsTo: {
    clause:
      'MUST have a conformsTo which references the Collection profile URL',
    validate: function ({ error }, values, entity, crate) {
      if (!values || !values.length) return error('Does not have conformsTo ');
      var urls = new Set(values.map((e) => e['@id']));
      if (!urls.has(ObjectProfileUrl)) error();
      if (urls.has(CollectionProfileUrl))
        error('MUST NOT have Collection profile');
    },
  },
  datePublished: Dataset.datePublished,
  license: {
    clause:
      'MUST have a `license` property with reference to an entity of type [File, DataReuseLicense] with an `@id` property that starts with `LICENSE.` and a `URL` property that is a valid URL',
    // TODO:  this SHOULD reference a CreativeWork which MAY be a DataReuseLicense – this may be used by repository software for retrieval of a resource
    validate: function ({ error, info, results }, values, entity, crate) {
      var foundAReuseLicense = false;
      for (let v of values) {
        if (v['@id'] && v['@id'].match(/^LICENSE\./)) {
          // We have a promising match - check that this is a
          const licenseFile = crate.getEntity(v['@id']);
          var thisLicenseLooksOK = true;
          if (!licenseFile['@type'].includes('File')){
            error(`There is a reference to a LICENSE entity but it does not have "File" as a type value: ${JSON.stringify(v)}`);
            thisLicenseLooksOK = false;
          }
          if (!licenseFile['@type'].includes('DataReuseLicense')){
            error(`There is a reference to a LICENSE entity but it does not have "DataReuseLicense" as a @type value: ${JSON.stringify(v)}`);
            thisLicenseLooksOK = false;

          }
          if (!isValidUrl(licenseFile['URL']) && !isValidUrl(licenseFile['@id']['URL']) ){
            error(`There is a reference to a LICENSE entity but it does not have a \`URL\` property which is a well-formed URL: ${JSON.stringify(v)}`);
            thisLicenseLooksOK = false;
          }
          foundAReuseLicense = foundAReuseLicense || thisLicenseLooksOK;
        } else if (!isValidUrl(v['@id'])) {
          error(`License @id is not a URL: ${JSON.stringify(v)}`);
        }
        if (!foundAReuseLicense) {
          error();
        }
      }
    },
  },
  publisher: Dataset.publisher,
  language: Common.language,
  hasPart: {
    clause:
      'SHOULD have a hasPart property referencing at least one item of type [File, PrimaryMaterial] and MAY have [File, Annotation] and [File, DerivedMaterial] items which are inter-related using annotionOf, derivedFrom properties.',
    validate: function ({ error, info, warn, results }, values, entity, crate) {
      const typesOfFile = {
        PrimaryMaterial: [],
        Annotation: [],
        DerivedMaterial: [],
      }; // Build a lookup by PrimaryMaterial, Annotation, DerivedMaterial for reporting
      for (item of values) {
        const types = new Set(item['@type']);
        for (let specialType of Object.keys(typesOfFile)) {
          // Remember this item

          if (types.has(specialType)) {
            typesOfFile[specialType].push(item);
          }
          if (!item.language) {
            item.language = entity.language;
            info(
              `Language property not present on hasPart entity $(item["@id]) - inherting from  $(entity["@id])`
            );
          }
          //addInheritedProps()
          // if !item.language (item is the part, ie File) - copy language from the entity (in this case it is the RepositoryObject)
        }
        // TODO check for magic extra types and save in typesOfFile -- NOTE: not an error if PrimaryMaterial AND annotation (this is conceivable if a video has subtitles for example)
      }
      for (let specialType of Object.keys(typesOfFile)) {
        if (typesOfFile[specialType].length === 0) {
          info(LanguageDataTypes[specialType].clause);

          // TODO - call specific validations
        }
      }
      for (let t of typesOfFile.PrimaryMaterial) {
        validateEntity(PrimaryMaterial, t, crate, results);
      }
      for (let t of typesOfFile.DerivedMaterial) {
        validateEntity(DerivedMaterial, t, crate, results);
      }
      for (let t of typesOfFile.Annotation) {
        validateEntity(Annotation, t, crate, results);
      }
    },
  },
};

const Language = {
  '@id': {
    clause:
      'MUST have an @id property and the value must start with `https://collection.aiatsis.gov.au/austlang/language/` or `https://glottolog.org/resource/`',
    validate: function ({ error }, id, entity, crate) {
      if (id) {
        if (
          !(
            id.startsWith(
              'https://collection.aiatsis.gov.au/austlang/language/'
            ) || id.startsWith('https://glottolog.org/resource/')
          )
        )
          error('The value of @id not start with the right URL');
      } else {
        error('There is no @id property'); // Don't think this can ever happen, right?
      }
    },
  },
};

const PrimaryMaterial = {
  '@type': {
    clause:
      'MUST have a @type value of “PrimaryMaterial" and MAY have other @type values',
    validate: function ({ error }, values) {
      if (!values.includes('PrimaryMaterial')) {
        error('@type MUST include “PrimaryMaterial”');
      }
    },
  },
  modality: RepositoryCollection.modality,
  language: {
    clause:
      'MUST a language property, or the RepositoryObject that is `partOf` MUST have a language property, referencing a Language item (language my be inhereted from the parent RepoObject)',
    validate({ error, results }, values) {
      if (!values || !values.length) {
        error('There is no language property');
        return;
      }

      // TODO: Need to get the language entity from the crate and call that
      for (const lang of values) {
        validateEntity(Language, lang, results);
      }
    },
  },
};

const DerivedMaterial = {
  '@type': {
    clause:
      'MUST have a @type value of “DerivedMaterial" and MAY have other @type values',
    validate: function ({ error }, values) {
      if (!values.includes('DerivedMaterial')) {
        error('@type MUST include “DerivedMaterial”');
      }
    },
  },
  modality: RepositoryCollection.modality,
  language: PrimaryMaterial.language,

  derivedFrom: {
    clause:
      'SHOULD have a derivedFrom property which references a PrimaryMaterial entity',
    validate({ error, info, warn, results }, values, entity, crate) {
      // TODO -- look for hasDerived
      if (!values || values.length === 0) {
        warn('Does not have a derivedFrom property');
        return;
      }

      for (let val of values) {
        if (!val['@id']) {
          warn(`Property value is not a reference to another entity: ${val}`);
        } else {
          referencedItem = crate.getEntity(val['@id']);
          if (!referencedItem) {
            info(
              `Property value does not resolve to another entity in this crate: ${JSON.stringify(
                val
              )}`
            );
          } else {
            // Check the type
            PrimaryMaterial['@type'].validate(
              { results, error, warn, info },
              referencedItem['@type'],
              referencedItem,
              null
            );
          }
        }
      }
    },
  },
};

const Annotation = {
  '@type': {
    clause:
      'MUST have a @type value of “Annotation" and MAY have other @type values',
    validate: function ({ error }, values) {
      if (!values.includes('Annotation')) {
        error('@type MUST include “Annotation”');
      }
    },
  },
  annotationType: {
    clause:
      'MAY have an `annotationType` property which SHOULD be a reference to one or more of the Language Data Commons Modality Terms: SpokenLanguage,  WrittenLanguage,  Song,  Gesture,  SignLanguage,  WhistledLanguage (this information may be summarisable from collection members)',
    validate({ error, info, warn, results }, values, entity, crate) {
      if (!values || values.length === 0) {
        info('Does not have an `annotationType` property');
        return;
      }
      annotationTypes = [
        'http://purl.archive.org/language-data-commons/terms#Phonemic',
        'http://purl.archive.org/language-data-commons/terms#Phonetic',
        'http://purl.archive.org/language-data-commons/terms#Phonological',
        'http://purl.archive.org/language-data-commons/terms#Syntactic',
        'http://purl.archive.org/language-data-commons/terms#Translation',
        'http://purl.archive.org/language-data-commons/terms#Semantic',
        'http://purl.archive.org/language-data-commons/terms#Transcription',
        'http://purl.archive.org/language-data-commons/terms#Prosodic',
      ];

      info('DOES have an `annotationType` property');
      for (a of values) {
        if (!annotationTypes.includes(a['@id'])) {
          warn(`annotationType value is not expected: ${JSON.stringify(a)}`);
        }
      }
    },
  },

  annotationOf: {
    clause:
      'SHOULD have an `annotationOf` property which references another entity',
    validate({ error, info, warn, results }, values, entity, crate) {
      // TODO -- look for @reverse props
      if (!values || values.length === 0) {
        warn('Does not have an `annotationOf` property');
        return;
      }
      info('Does have an `annotationOf` property');
      for (let val of values) {
        if (!val['@id']) {
          warn(`Property value is not a reference to another entity: ${val}`);
        } else {
          referencedItem = crate.getEntity(val['@id']);
          if (!referencedItem) {
            info(
              `Property value does not resolve to another entity in this crate: ${JSON.stringify(
                val
              )}`
            );
          } else {
            // Check the type

            info(
              `Property value does resolve to another entity in this crate: ${JSON.stringify(
                val
              )}`
            );
          }
        }
      }
    },
  },
};

const rules = (module.exports = {
  Common,
  Dataset,
  RepositoryCollection,
  RepositoryObject,
  PrimaryMaterial,
  DerivedMaterial,
  Language,
  LanguageDataTypes,
  Annotation,
});
