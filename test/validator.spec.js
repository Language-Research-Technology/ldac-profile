const { ROCrate } = require('ro-crate');
const { LdacProfile } = require('../index.js');
const rules = require('../lib/rules');
const constants = require('../lib/constants');
const assert = require('assert');
const fs = require('fs');
const opt = { alwaysAsArray: true, link: true };

function hasClause(results, rule, id) {
  if (id) {
    results.some((r) => r.clause === rule.clause && rule.entity === id);
  }
  return results.some((r) => r.clause === rule.clause);
}

function hasMessage(results, message, id) {
  if (id) {
    return results.some((r) => r.message === message && r.entity === id);
  }
  return results.some((r) => r.message === message);
}

describe('Dataset', function () {
  it('must have type', function () {
    const crate = new ROCrate({}, opt);
    const result = LdacProfile.validate(crate);
    //const result = LdacProfile.validateEntity(crate.getEntity('adfs'));
    assert(hasClause(result.errors, rules.Dataset['@type']));
  });

  it('must have correct @id', function () {
    const crate = new ROCrate({}, opt);
    crate.rootDataset['@id'] = 'abc';
    const result = LdacProfile.validate(crate);
    //const result = LdacProfile.validateEntity(crate.getEntity('adfs'));
    assert(hasClause(result.errors, rules.Common['@id']));
  });

  it('must have name', function () {
    const crate = new ROCrate({}, opt);
    const result = LdacProfile.validate(crate);
    //const result = LdacProfile.validateEntity(crate.getEntity('adfs'));
    assert(hasClause(result.errors, rules.Common.name));
  });
});

describe('RepositoryCollection', function () {
  it('Has all the things it needs', function () {
    const crate = new ROCrate({}, opt);
    assert(crate.rootDataset);
    crate.rootDataset['@type'] = ['Dataset', 'RepositoryCollection'];
    crate.rootDataset.conformsTo = { '@id': constants.CollectionProfileUrl };
    var result = LdacProfile.validate(crate);
    assert(hasClause(result.errors, rules.Dataset.datePublished));
    crate.rootDataset.datePublished = '2020';
    crate.rootDataset.name = '2020';
    crate.rootDataset.description = 'SOMETHING';
    crate.rootDataset.publisher = {
      '@id': 'http://nla.gov.au/nla.party-593909',
      'name': 'The University of Melbourne'
    };
    crate.rootDataset.license = { 
      '@id': 'LICENSE.txt',
      '@type': ['File', 'DataReuseLicense'],
      'URL': 'https://example.com/access-conditions/',
      'name': 'License for dataset XXX',
      'Description':'Put a summary of the licence conditions here',
       'text': 'Put the license conditions here ... '
    }
    result = LdacProfile.validate(crate);

    crate.rootDataset.hasMember = {
        "@id": "arcp://name,someting/some/object",
        "@type": "RepositoryObject",
        "conformsTo": { '@id': constants.ObjectProfileUrl },
        "name": "A name",
        "description": "blah"
    }
    result = LdacProfile.validate(crate);
    assert(hasMessage(result.info, 'Does not have a `hasPart` property'));
    assert.equal(result.errors.length, 0);
  });
});

describe('Frictionless schemas', function () {
  var opt = { alwaysAsArray: true, link: true };
  it('can check a schema', async function () {
    this.timeout(50000);

    const crate = new ROCrate(
      JSON.parse(fs.readFileSync('examples/art/ro-crate-metadata.json')),
      opt
    );
    var result = LdacProfile.validate(crate);
    assert(
      hasMessage(
        result.info,
        'DOES have an `conformsTo` property that indicates this is a frictionless data table schema',
        'ABCNE2.csv'
      )
    );

    // No conforms to indicating that the collection conforms to this profile we're validating here
  });
});
