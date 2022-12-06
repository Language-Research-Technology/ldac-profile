const { ROCrate } = require('ro-crate');
const rules = require('./rules');
const {validateEntity} = require('./validator');
const fs = require('fs');
const path = require('path');


/**
 * 
 */
class LdacProfile {
  /**
   * 
   * @param {object} crate
   * @returns 
   */
  static validate(crate) {
    //const crate = inputCrate.clone();
    return validateEntity(rules.Dataset, crate.rootDataset, crate);
  }

  static generateSpec(templatePath) {
    const ruleText = {};
    for (const key in rules) {
      let text = '';
      const ruleset = rules[key];
      for (const prop in ruleset) {
        text += `- ${ruleset[prop].clause}\n\n`;
      }
      ruleText[key] = text;
    }
    // load examples
    const examples = {};
    for (const dir of fs.readdirSync('examples')) {
      const cratePath = path.join('examples', dir, 'ro-crate-metadata.json');
      try {
        const json = JSON.parse(fs.readFileSync(cratePath, 'utf8'));
        examples[dir] = new ROCrate(json, {array: true, link: true});
      } catch (error) {
      }
    }
    function exampleEntities(exampleName, entityIds) {
      var result = '';
      if (exampleName && examples[exampleName]) {
        entityIds = [].concat(entityIds);
        let part = '';
        for (const id of entityIds) {
          const entity = examples[exampleName].getEntity(id);
          if (entity) {
            part += '```json\n' + JSON.stringify(entity.toJSON(), null, 2) + '\n```\n';
          }
        }
        if (part) {
          part += `[source](../example/${exampleName}/README.md)\n\n`;
          result += part;
        }
      }
      return result;
    }
    const template = fs.readFileSync(templatePath || 'templates/profile.md');
    return (new Function('rules', 'exampleEntities', 'return `' + template + '`;'))(ruleText, exampleEntities);
  }

  static generateDescribo() {

  }
}

module.exports = { LdacProfile };
