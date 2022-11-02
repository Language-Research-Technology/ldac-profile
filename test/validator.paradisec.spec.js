const {ROCrate} = require('ro-crate');
const {LdacProfile} = require('../index.js');
const assert = require('assert');
const fs = require('fs');
const rules = require('../lib/rules');
const constants = require('../lib/constants');
const { createHash } = require('crypto');

function hasClause(results, rule) {
  return  results.some(r => r.clause === rule.clause);
}

function hasMessage(results, message) {
  return  results.some(r => r.message === message);
}

describe("PARADISEC", function () {
  var opt = {alwaysAsArray: true, link: true};
  it("can check a PARADISEC Collection", async function () {
    this.timeout(50000);

    const crate = new ROCrate(JSON.parse(fs.readFileSync("test-data/paradisec/collection/NT1/ro-crate-metadata.json")), opt);
    var result = LdacProfile.validate(crate);

    // No conforms to indicating that the collection conforms to this profile we're validating here
    assert(hasClause(result.errors, rules.RepositoryCollection.conformsTo));
    // so add it
    crate.rootDataset.conformsTo = {'@id': constants.CollectionProfileUrl};
    result = LdacProfile.validate(crate);
    assert(!hasClause(result.errors, rules.RepositoryCollection.conformsTo));


    // No dataPublished (this is an RO-Crate requirement)
    assert(hasClause(result.errors, rules.RepositoryCollection.datePublished));
    //Add it by copying from dateModified
    crate.rootDataset.datePublished = crate.rootDataset.dateModified;
    result = LdacProfile.validate(crate);
    assert(!hasClause(result.errors, rules.RepositoryCollection.datePublished));
    
    // License is present but does not have a URL for an @id
    assert(hasClause(result.errors, rules.RepositoryCollection.license));
    crate.updateEntityId("_:b1", "https://www.paradisec.org.au/deposit/access-conditions/");
    result = LdacProfile.validate(crate);

     // No publisher is present
     assert(hasClause(result.errors, rules.RepositoryCollection.publisher));
     // Add one (luckily there is a handy university entity in the metadata that is not being used)
     crate.rootDataset.publisher = {"@id": "http://nla.gov.au/nla.party-593909"}
     result = LdacProfile.validate(crate);

     //No language prop - (not an error - reported)
     assert(hasMessage(result.info, "Does not have a `language` property"));

     crate.rootDataset.language = crate.rootDataset.subjectLanguages
     crate.deleteProperty(crate.rootDataset, "contentLanguages");

     result = LdacProfile.validate(crate);

     assert(hasMessage(result.info, "Does have a `language` property"));

    console.log(result);

   


    assert.equal(result.errors.length, 0);

    // TODO - output "fixed" crate
  });
  });



  describe("RepositoryObject", async function () {


    it("can check a PARADISEC Object", async function () {
      this.timeout(50000);

      var opt = {alwaysAsArray: true, link: true};

      const crate = new ROCrate(JSON.parse(fs.readFileSync("test-data/paradisec/item/NT1-001/ro-crate-metadata.json")), opt);
      var result = LdacProfile.validate(crate);

      // No conforms to indicating that the collection conforms to this profile we're validating here
      assert(hasClause(result.errors, rules.RepositoryObject.conformsTo));
      // so add it
      crate.rootDataset.conformsTo = {'@id': constants.ObjectProfileUrl};
      result = LdacProfile.validate(crate);
      assert(!hasClause(result.errors, rules.RepositoryObject.conformsTo));


      // No dataPublished (this is an RO-Crate requirement)
      assert(hasClause(result.errors, rules.RepositoryObject.datePublished));
      //Add it by copying from dateModified
      crate.rootDataset.datePublished = crate.rootDataset.dateModified;
      result = LdacProfile.validate(crate);
      assert(!hasClause(result.errors, rules.RepositoryObject.datePublished));
      
      // License is present but does not have a URL for an @id
      assert(hasClause(result.errors, rules.RepositoryObject.license));

      // There is a license present so give that URL
      crate.updateEntityId("_:b0", "https://www.paradisec.org.au/deposit/access-conditions/");
      result = LdacProfile.validate(crate);

      // Publisher is present already - so there should be no error
      assert(!hasClause(result.errors, rules.RepositoryCollection.publisher));
   
      result = LdacProfile.validate(crate);

      assert(hasMessage(result.info, 'Does not have a `language` property'));

      crate.rootDataset.language = crate.rootDataset.contentLanguages;
      //crate.deleteProperty(crate.rootDataset, 'contentLanguages');

      result = LdacProfile.validate(crate);
 
      assert(hasMessage(result.info, 'Does have a `language` property'));
      console.log(result.warnings)

      // Does not havae the right context
      assert(hasMessage(result.warnings,  "Property `speaker` is not defined in the crate's context"));

      
      crate.addContext("http://purl.archive.org/language-data-commons/context.json");
      await crate.resolveContext();
      // Final check of fixed data

      result = LdacProfile.validate(crate);
      assert(!hasMessage(result.warnings,  "Property `speaker` is not defined in the crate's context"));
      console.log(result);
      assert.equal(result.errors.length, 0);
});
  });
