const { validateEntity, resolveType } = require('./validator');

const { CollectionProfileUrl, ObjectProfileUrl } = require('./constants');

function isValidUrl(urlStr) {
  try {
    let url = new URL(urlStr);
    return true;
  } catch (e) {
  }
  return false;
}

const Common = {
  '@id': {
    clause: 'It MUST have an @id property and the value must be a valid URI or "./"',
    validate: function ({ error }, id) {
      if (id) {
        if (!isValidUrl(id) && id != './') error('The value of @id is not a valid URI');
      } else {
        error('There is no @id property');
      }
    }
  },
  name: {
    clause: 'It MUST have a single name value which is a string with one or more characters',
    validate: function ({ error }, name) {
      if (name && name.length) {
        if (name.length > 1) error('There is more than one name');
        else {
          if (typeof name[0] !== 'string') error('Value is not a string');
          else if (name[0].length === 0) error('Value must have one or more characters');
        }
      } else {
        error('There is no name property');
      }
    }
  },
};

const Dataset = {
  '@type': {
    clause: 'It MUST include a "Dataset" and either a “RepositoryCollection” or “RepositoryObject”',
    validate: function ({ error, results }, values, entity) {
      var type;
      const types = new Set(values);
      if (!types.has('Dataset')) error('It MUST include a "Dataset"');
      if (types.has('RepositoryCollection')) type = 'RepositoryCollection';
      if (types.has('RepositoryObject')) {
        if (type) {
          error('It MUST NOT include both “RepositoryCollection” and “RepositoryObject”');
        } else {
          type = 'RepositoryObject';
        }
      }
      if (!type) {
        error('It MUST include either “RepositoryCollection” or “RepositoryObject”');
        type = 'Common';
      }
      validateEntity(rules[type], entity, results);
    }
  },
  conformsTo: {
    clause: 'MUST have a conformsTo which references the profile URL for either Collection or Object but not both',
    validate: function ({ error }, values) {
      if (!values || !values.length) return error('Does not have conformsTo');
      var urls = new Set(values.map(e => e['@id']));
      if (urls.has(CollectionProfileUrl) && urls.has(ObjectProfileUrl)) error('Cannot have both Collection and Object profiles');
      else if (!urls.has(CollectionProfileUrl) && !urls.has(ObjectProfileUrl)) error('Does not conform to this profile');
    }
  }

};

const RepositoryCollection = {
  '@id': Common['@id'],
  '@type': {
    clause: 'It MUST be [“Dataset”, “RepositoryCollection”] or if part of a bundled collection “RepositoryCollection”',
    validate: function ({ error }, values) {
      const types = new Set(values);
      if (!types.has('RepositoryCollection')) error('@type MUST include “RepositoryCollection”');
      if (types.has('RepositoryObject')) error('@type MUST NOT include “RepositoryObject”');
    }
  },
  author: {
    clause: 'It MUST have a list of at least one Person or Organization item as author',
    validate() { }
  },
  conformsTo: {
    clause: 'It MUST have a conformsTo which references the Collection profile URL',
    validate: function ({ error }, values) {
      if (!values || !values.length) return error('Does not have conformsTo');
      var urls = new Set(values.map(e => e['@id']));
      if (!urls.has(CollectionProfileUrl)) error();
      if (urls.has(ObjectProfileUrl)) error('It MUST NOT have Object profile');
    }
  },
  datePublished: {
    //cardinality: '1',
    clause: 'It MUST have exactly one value which is a string that parses as ISO-8601 to the level of at least a year. E.g.: 2000, 2000-10, 2000-10-01T12:34:56+10',
    validate: function ({ error }, datePublished) {
      //console.log(entity.datePublished, Date.parse(entity.datePublished));
      if (!datePublished || !datePublished.length || isNaN(Date.parse(datePublished[0]))) {
        error();
      }
    }
  },
  description: {
    clause: 'MUST have at least one description which is a string with one or more characters',
    validate: function ({ error }, description) {
      if (!description || !description.length || !description[0].length) error();
    }
  },
  license: {
    clause: 'license',
    validate() { }
  },
  hasMember: {
    clause: 'It MAY have one or more references to Collection or Object entities',
    validate({ error, info, results }, values) {
      if (!values || !values.length) return info();
      for (const member of values) {
        let type = resolveType(['RepositoryCollection', 'RepositoryObject'], member) || 'Common';
        if (!type) error('Entities in hasMember MUST include either one of “RepositoryCollection” or “RepositoryObject”');
        validateEntity(rules[type], member, results);
        rules;
      }
    }
  },
  name: Common.name,
};

const RepositoryObject = {
  hasPart: {
    clause: 'has part',
    validate() { }
  }

};

const Language = {};

const PrimaryMaterial = {
  modality: {
    clause: 'modality',
    validate() { }
  },
  language: {
    clause: 'It MUST have one or more languages',
    validate({error, results}, values) { 
      if (!values || !values.length) error();
      for (const lang of values) {
        validateEntity(Language, lang, results);
      }
    }

  }

};

const DerivedMaterial = {
  derivedFrom: {
    clause: 'derivedFrom',
    validate() { }
  }

};

const rules = module.exports = { Common, Dataset, RepositoryCollection, RepositoryObject, PrimaryMaterial, DerivedMaterial, Language };
