#!/usr/bin/env node
/**
 * A CLI that uses the ldac profile validator to check an RO-Crate metadata document.
 */
const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const { ROCrate } = require('ro-crate');
const { LdacProfile } = require('./index.js');
const { version } = require('./package.json');

program
  .showHelpAfterError()
  .description(
    'Checks an RO-Crate metadata document; a (ro-crate-metadata.json) file'
  )
  .version(version)
  .argument('<path>', 'Path to the RO-Crate metadata file')
  .option('-e, --errors', 'Output errors only')

  .action(main);

program.parse(process.argv);


function main(cratePath, options) {
  try {
    const opt = { alwaysAsArray: true, link: true };
    const crate = new ROCrate(JSON.parse(fs.readFileSync(cratePath, 'utf8')), opt);
    var result = LdacProfile.validate(crate);
    if (options.errors) {
      console.log(JSON.stringify(result.errors, null, 4));
    } else {
      console.log(JSON.stringify(result, null, 4));
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error: File not found - '${cratePath}'`);
    } else {
      console.error(error);
    }
  }
}

