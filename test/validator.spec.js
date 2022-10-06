const {ROCrate} = require('ro-crate');
const {LdacProfile} = require('../index.js');
const assert = require('assert');

describe("Profile", function () {
  var opt = {array: true, link: true};
  it("fails the check on empty crate", function () {
    const crate = new ROCrate({}, opt);
    const result = LdacProfile.validate(crate.rootDataset);
    console.log(result);
    
    assert.equal(result.errors[0].clause, LdacProfile.Common['@id'].clause);
    assert.equal(result.errors[1].clause, LdacProfile.Common.name.clause);
  });

  it("has conformsTo", function () {
    const crate = new ROCrate({}, opt);
    crate.rootDataset.conformsTo = {'@id': LdacProfile.CollectionProfileUrl};
    const result = LdacProfile.validate(crate.rootDataset);
    console.log(result);
    
    assert.equal(result.errors[0].clause, LdacProfile.Common['@id'].clause);
    assert.equal(result.errors[1].clause, LdacProfile.Common.name.clause);
  });
});
