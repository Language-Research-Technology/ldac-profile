const rules = require('./rules');
const {validateEntity} = require('./validator');
const fs = require('fs');


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
        text += ruleset[prop].clause + '\n\n';
      }
      ruleText[key] = text;
    }
    const template = fs.readFileSync(templatePath || 'templates/profile.md');
    return (new Function('rules', 'return `' + template + '`;'))(ruleText);
  }

  static generateDescribo() {

  }
}

module.exports = { LdacProfile };