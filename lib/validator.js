const { Utils } = require('ro-crate');
const roCrateValidator = require('..');
const { asArray } = Utils;

const CollectionProfileUrl = 'https://purl.archive.org/language-data-commons/profile#Collection';
const ObjectProfileUrl = 'https://purl.archive.org/language-data-commons/profile#Object';


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
    clause: 'MUST have an @id property and the value must be a valid URI',
    validate: function (entity, res) {
      if (entity['@id']) {
        if (!isValidUrl(entity['@id'])) res.error('@id is not a valid URI');
      } else {
        res.error('There is no @id property');
      }
    }
  },
  name: {
    clause: 'MUST have a single name value which is a string with one or more characters',
    validate: function (entity, res) {
      let name = asArray(entity.name);
      if (name.length) {
        if (name.length > 1) res.error('There is more than one name');
        else {
          if (typeof name[0] !== 'string') res.error('Value is not a string');
          else if (name[0].length === 0) res.error('Value must have one or more characters');
        }
      } else {
        res.error('There is no name property');
      }
    }
  },
  conformsTo: {
    clause: 'MUST have a conformsTo which references the profile URL for either Collection or Object but not both',
    validate: function (entity, res) {
      let isCollection, isObject;
      if (!entity.conformsTo) return res.error('Does not have conformsTo');
      for (let e of entity.conformsTo) {
        if (e['@id'] === CollectionProfileUrl) isCollection = true;
        else if (e['@id'] === ObjectProfileUrl) isObject = true;
      }
      if (isCollection && isObject) res.error('Cannot have both Collection and Object profiles');
      else if (isCollection) validateCollection(entity, res);
      else if (isObject) validateObject(entity, res);
      else res.error('Does not have any profile');
    }
  }

};

const RepositoryCollection = {
  // '@id': Common['@id'],
  // name: Common.name,
  datePublished: {
    clause: 'MUST have a date that parses as ISO-8601 to the level of at least a year. E.g.: 2000, 2000-10, 2000-10-01T12:34:56+10',
    validate: function (entity, res) {
      if (!entity.datePublished || isNaN(Date.parse(entity.datePublished))) {
        res.error(this.clause);
      }
    }
  },
  description: {
    clause: 'MUST have a single name value which is a string with one or more characters',
    validate: function (entity, errors) {
    }
  }
};

const RepositoryObject = {
};

function validateCollection(entity, res) {
  for (let name in RepositoryCollection) {
    res.error = function(message) {
      this.errors.push({ name, message, clause: RepositoryCollection[name].clause });
    }
    RepositoryCollection[name].validate(entity, res);
  }
}

function validateObject(entity, res) {
  for (let name in RepositoryCollection) {
    res.error = function(message) {
      this.errors.push({ name, message, clause: RepositoryObject[name].clause });
    }
    RepositoryCollection[name].validate(entity, res);
  }

}


class LdacProfile {
  static RepositoryCollection = RepositoryCollection;
  static RepositoryObject = RepositoryObject;
  static Common = Common;
  static CollectionProfileUrl = CollectionProfileUrl;
  static ObjectProfileUrl = ObjectProfileUrl;

  static validate(root) {
    let res = { 
      errors: []
    };
    // check all the commons on the root
    for (let name in Common) {
      res.error = function(message) {
        this.errors.push({ name, message, clause: Common[name].clause });
      }
      Common[name].validate(root, res);
    }

    return { errors: res.errors };
  }

  static generateSpec() {

  }

  static generateDescribo() {

  }
}

module.exports = { LdacProfile };
