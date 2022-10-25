const {ROCrate} = require('ro-crate');
const {LdacProfile} = require('../index.js');
const assert = require('assert');
const fs = require('fs');

describe("Profile", function () {
  var opt = {alwaysAsArray: true, link: true};

  it("fails the check on empty crate cos no name", function () {
    const crate = new ROCrate({}, opt);
    const result = LdacProfile.validate(crate.rootDataset);
    console.log(result);
    
    assert.equal(result.errors[0].clause, LdacProfile.Common.name.clause);
  });

  it("has conformsTo", function () {
    const crate = new ROCrate({}, opt);

    crate.rootDataset.conformsTo = {'@id': LdacProfile.CollectionProfileUrl};
    var result = LdacProfile.validate(crate.rootDataset);
    assert.equal(result.errors[1].clause, LdacProfile.RepositoryCollection.datePublished.clause);

    crate.rootDataset.datePublished = "2020";
    crate.rootDataset.name = "2020"
    result = LdacProfile.validate(crate.rootDataset);
    assert.equal(result.errors.length, 0);
  });
});


