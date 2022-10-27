const {ROCrate} = require('ro-crate');
const {LdacProfile} = require('../index.js');
const assert = require('assert');
const fs = require('fs');


describe("PARADISEC", function () {
  var opt = {alwaysAsArray: true, link: true};
  it("can check a PARADISEC Collection", function () {
    const crate = new ROCrate(JSON.parse(fs.readFileSync("test-data/paradisec/collection/NT1/ro-crate-metadata.json")), opt);
    var result = LdacProfile.validate(crate);

    console.log("Checking PARADISEC data");
    console.log(result);
    assert.equal(result.errors[0].clause, LdacProfile.Common['conformsTo'].clause);

    // No conforms to, so add it
    console.log("Adding conformsTo");
    crate.rootDataset.conformsTo = {'@id': LdacProfile.CollectionProfileUrl};
    result = LdacProfile.validate(crate);

    assert.equal(result.errors[0].clause, LdacProfile.RepositoryCollection.datePublished.clause);
    crate.rootDataset.datePublished = crate.rootDataset.dateModified;
    result = LdacProfile.validate(crate);

    console.log(crate.rootDataset.datePublished);  
    console.log(result);
    assert.equal(result.errors.length, 0);
   
  });

});

