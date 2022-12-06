const {LdacProfile} = require('../index.js');
const rules = require('../lib/rules');
const constants = require('../lib/constants');

describe("generateSpec", function () {

    it("must have type", function () {
      const result = LdacProfile.generateSpec();
      console.log(result)
      //const result = LdacProfile.validateEntity(crate.getEntity('adfs'));
    });
});
