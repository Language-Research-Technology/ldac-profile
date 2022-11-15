const {ROCrate} = require('ro-crate');
const {LdacProfile} = require('../index.js');
const rules = require('../lib/rules');
const constants = require('../lib/constants');
const assert = require('assert');
const fs = require('fs');

const opt = {alwaysAsArray: true, link: true};

function hasClause(results, rule, id) {
  if (id) {
    results.some((r) => r.clause === rule.clause && rule.entity === id);
  }
  return results.some((r) => r.clause === rule.clause);
}

describe("Dataset", function () {

  it("must have type", function () {
    const crate = new ROCrate({}, opt);
    const result = LdacProfile.validate(crate);
    //const result = LdacProfile.validateEntity(crate.getEntity('adfs'));
    assert(hasClause(result.errors, rules.Dataset['@type']));
  });

  it("must have correct @id", function () {
    const crate = new ROCrate({}, opt);
    crate.rootDataset['@id'] = 'abc';
    const result = LdacProfile.validate(crate);
    //const result = LdacProfile.validateEntity(crate.getEntity('adfs'));
    assert(hasClause(result.errors, rules.Common['@id']));
  });

  it("must have name", function () {
    const crate = new ROCrate({}, opt);
    const result = LdacProfile.validate(crate);
    //const result = LdacProfile.validateEntity(crate.getEntity('adfs'));
    assert(hasClause(result.errors, rules.Common.name));
  });
});

describe("RepositoryCollection", function () {
    it("has conformsTo", function () {
    const crate = new ROCrate({}, opt);
    assert(crate.rootDataset);
    crate.rootDataset['@type'] = ['Dataset', 'RepositoryCollection'];
    crate.rootDataset.conformsTo = {'@id': constants.CollectionProfileUrl};
    var result = LdacProfile.validate(crate);
    console.log(result.errors)
    assert(hasClause(result.errors, rules.RepositoryCollection.datePublished));

    crate.rootDataset.datePublished = "2020";
    crate.rootDataset.name = "2020";
    crate.rootDataset.description = "SOMETHING";
    crate.rootDataset.license = {"@id": "http://example.com/license"};
    result = LdacProfile.validate(crate);
    console.log(result);
    assert.equal(result.errors.length, 0);
  });
});


describe("generateSpec", function () {
  it("can generate spec text", function () {
    const text = LdacProfile.generateSpec();
    //console.log(text);
  });
});
