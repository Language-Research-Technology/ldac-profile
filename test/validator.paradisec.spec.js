const {ROCrate} = require('ro-crate');
const {LdacProfile} = require('../index.js');
const assert = require('assert');
const fs = require('fs');
const rules = require('../lib/rules');
const constants = require('../lib/constants');
const { createHash } = require('crypto');

function hasClause(results, rule, id) {
  if (id) {
    results.some(r => r.clause === rule.clause && rule.entity === id)
  }
  return  results.some(r => r.clause === rule.clause);
}

function hasMessage(results, message, id) {
  
  if (id) {
    return  results.some(r => r.message === message && r.entity === id)
  }
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


    // No datePublished (this is an RO-Crate requirement)
    assert(hasClause(result.errors, rules.RepositoryCollection.datePublished));
    //Add it by copying from dateModified
    crate.rootDataset.datePublished = crate.rootDataset.dateModified;
    result = LdacProfile.validate(crate);
    assert(!hasClause(result.errors, rules.RepositoryCollection.datePublished));
    
    // License is present but does not have a URL for an @id
    assert(hasClause(result.errors, rules.RepositoryCollection.license));
    crate.updateEntityId("_:b1", "https://www.paradisec.org.au/deposit/access-conditions/");
    result = LdacProfile.validate(crate);

    // TODO: DO we need to check if there is a local copy of the license? (For long term presevation you might want to keep a copy with the data)

     // No publisher is present
     assert(hasClause(result.errors, rules.RepositoryCollection.publisher));
     // Add one (luckily there is a handy university entity in the metadata that is not being used)
     crate.rootDataset.publisher = {"@id": "http://nla.gov.au/nla.party-593909"}
     result = LdacProfile.validate(crate);
     assert(!hasClause(result.errors, rules.RepositoryCollection.publisher));


     //No language prop - (not an error - reported)
     assert(hasMessage(result.info, "Does not have a `language` property"));
     crate.rootDataset.language = crate.rootDataset.subjectLanguages

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
      // Validate again
      result = LdacProfile.validate(crate);
      // Now it does have a conforms to
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
      assert(!hasClause(result.errors, rules.RepositoryObject.license));

      // Publisher is present already - so there should be no error
      assert(!hasClause(result.errors, rules.RepositoryCollection.publisher));
   
      result = LdacProfile.validate(crate);

      assert(hasMessage(result.info, 'Does not have a `language` property'));
      crate.rootDataset.language = crate.rootDataset.contentLanguages;
      //crate.deleteProperty(crate.rootDataset, 'contentLanguages');
      result = LdacProfile.validate(crate);
      assert(hasMessage(result.info, 'Does have a `language` property'));

      // Does not have the right context - so lots of warnings
      assert(hasMessage(result.warnings,  "Property `speaker` is not defined in the crate's context"));

      crate.addContext("http://purl.archive.org/language-data-commons/context.json");
      await crate.resolveContext();
      // Final check of fixed data

      result = LdacProfile.validate(crate);
      // Now some of the warnings are gone but there are still a lot of unknown props
      assert(!hasMessage(result.warnings,  "Property `speaker` is not defined in the crate's context"));
      assert.equal(result.errors.length, 0);
      fs.writeFileSync("examples/paradisec/item/NT1-001/ro-crate-metadata.json", JSON.stringify(crate.toJSON(), null, 2) )


      // Now show what it would look like with more detailed description of files
      const wav = crate.getEntity("NT1-001-001A.wav");
      wav["@type"] = ["File", "PrimaryMaterial"];
      result = LdacProfile.validate(crate);
      // Even though this file does not have a language it should be inherited from the Object
      assert(!hasClause(result.errors, rules.PrimaryMaterial.language));
      // Doesn't have a Modality
      assert(hasMessage(result.info, "Does not have a modality property" , "NT1-001-001A.wav" ));

      // Try a dodgy value for modality
      wav.modality = "AString";
      result = LdacProfile.validate(crate);
      assert(hasMessage(result.warnings, `Modality value is not expected: "${wav.modality}"` , "NT1-001-001A.wav" ));

      wav.modality = {"@id": "http://purl.archive.org/language-data-commons/terms#SpokenLanguage"};
      result = LdacProfile.validate(crate);

      const mp3 = crate.getEntity('NT1-001-001A.mp3');
      mp3['@type'] = ['File', 'DerivedMaterial'];
      result = LdacProfile.validate(crate);
      assert(hasMessage(result.warnings, "Does not have a derivedFrom property" , "NT1-001-001A.mp3" ));

      mp3.derivedFrom = "someValue";
      result = LdacProfile.validate(crate);
      assert(hasMessage(result.warnings, `Property value is not a reference to another entity: ${mp3.derivedFrom}` , "NT1-001-001A.mp3" ));

      // Now we add a derivedFrom which which points somewhere else - Not a error, but we can't validate it
      mp3.derivedFrom = {'@id': "http://example.com/some/id"};
      result = LdacProfile.validate(crate);
      assert(hasMessage(result.info, 'Property value does not resolve to another entity in this crate: {"@id":"http://example.com/some/id"}' , "NT1-001-001A.mp3" ));


      mp3.derivedFrom = wav;
      result = LdacProfile.validate(crate);
      
      assert(result.errors.length === 0);

      console.log(result)




      

      // 





});



it("can check a PARADISEC Object with annotations", async function () {
  this.timeout(50000);

  var opt = {alwaysAsArray: true, link: true};

  const crate = new ROCrate(JSON.parse(fs.readFileSync("test-data/paradisec/item/NT1-98007/ro-crate-metadata.json")), opt);
  var result = LdacProfile.validate(crate);

  // No conforms to indicating that the collection conforms to this profile we're validating here
  assert(hasClause(result.errors, rules.RepositoryObject.conformsTo));
  // so add it
  crate.rootDataset.conformsTo = {'@id': constants.ObjectProfileUrl};
  // Validate again
  result = LdacProfile.validate(crate);
  // Now it does have a conforms to
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
  assert(!hasClause(result.errors, rules.RepositoryObject.license));

  // Publisher is present already - so there should be no error
  assert(!hasClause(result.errors, rules.RepositoryCollection.publisher));

  result = LdacProfile.validate(crate);

  assert(hasMessage(result.info, 'Does not have a `language` property'));
  crate.rootDataset.language = crate.rootDataset.contentLanguages;
  //crate.deleteProperty(crate.rootDataset, 'contentLanguages');
  result = LdacProfile.validate(crate);
  assert(hasMessage(result.info, 'Does have a `language` property'));

  // Does not have the right context - so lots of warnings
  assert(hasMessage(result.warnings,  "Property `speaker` is not defined in the crate's context"));

  crate.addContext("http://purl.archive.org/language-data-commons/context.json");
  await crate.resolveContext();
  // Final check of fixed data

  result = LdacProfile.validate(crate);
  // Now some of the warnings are gone but there are still a lot of unknown props
  assert(!hasMessage(result.warnings,  "Property `speaker` is not defined in the crate's context"));
  assert.equal(result.errors.length, 0);
  
  // Now show what it would look like with more detailed description of files
  const wav = crate.getEntity("NT1-98007-98007A.wav");
  wav["@type"] = ["File", "PrimaryMaterial"];
  result = LdacProfile.validate(crate);
  // Even though this file does not have a language it should be inherited from the Object
  assert(!hasClause(result.errors, rules.PrimaryMaterial.language));
  // Doesn't have a Modality
  assert(hasMessage(result.info, "Does not have a modality property" , "NT1-98007-98007A.wav" ));

  // Try a dodgy value for modality
  wav.modality = "AString";
  result = LdacProfile.validate(crate);
  assert(hasMessage(result.warnings, `Modality value is not expected: "${wav.modality}"` , "NT1-98007-98007A.wav" ));

  wav.modality = {"@id": "http://purl.archive.org/language-data-commons/terms#SpokenLanguage"};
  result = LdacProfile.validate(crate);

  const mp3 = crate.getEntity('NT1-98007-98007A.mp3');
  mp3['@type'] = ['File', 'DerivedMaterial'];
  result = LdacProfile.validate(crate);
  assert(hasMessage(result.warnings, "Does not have a derivedFrom property" , "NT1-98007-98007A.mp3" ));

  mp3.derivedFrom = wav;
  result = LdacProfile.validate(crate);
  assert(!hasMessage(result.warnings, "Does not have a derivedFrom property" , "NT1-98007-98007A.mp3" ));

  

  const eaf = crate.getEntity('NT1-98007-98007A.eaf');
  eaf['@type'] = ['File', 'Annotation'];

  result = LdacProfile.validate(crate);
  console.log(result.warnings);
  assert(hasMessage(result.warnings, "Does not have an `annotationOf` property" , "NT1-98007-98007A.eaf" ));
  eaf.annotationOf = wav;
  result = LdacProfile.validate(crate);
  assert(!hasMessage(result.warnings, "Does not have an `annotationOf` property" , "NT1-98007-98007A.eaf" ));

  result = LdacProfile.validate(crate);
  assert(!hasMessage(result.warnings, "Does not have an `annotationType` property" , "NT1-98007-98007A.eaf" ));


  // Guessing at what might be in the EAF file in the way of annotations

  eaf.annotationType = [
        {"@id": "http://purl.archive.org/language-data-commons/terms#Translation"},
        {"@id": "http://purl.archive.org/language-data-commons/terms#Transcription"},
        {"@id": "http://purl.archive.org/language-data-commons/terms#Prosodic"},
        "Some-random-value"
  ];
  result = LdacProfile.validate(crate);

  assert(hasMessage(result.warnings, `annotationType value is not expected: "Some-random-value"` , "NT1-98007-98007A.eaf" ));



  result = LdacProfile.validate(crate);

  console.log(result);



  fs.writeFileSync("examples/paradisec/item/NT1-98007/ro-crate-metadata.json", JSON.stringify(crate.toJSON(), null, 2) )






  

  // 





});


  });
