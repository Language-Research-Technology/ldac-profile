#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');
const ROCrate = require('ro-crate').ROCrate;
const { LdacProfile } = require('./index.js');

program
  .description(
    'Checks an RO-Crate metadata document; a (ro-crate-metadata.json) file'
  )
  .arguments('<path>')
  .option('-e,  --errors', 'Output Errors only')

  .action((path) => {
    cratePath = path;
  });

program.parse(process.argv);

async function main() {
  var opt = { alwaysAsArray: true, link: true };
  const crate = new ROCrate(JSON.parse(fs.readFileSync(cratePath)), opt);
  var result = LdacProfile.validate(crate);
  if (program.errors) {
    console.log(result.errors);
  } else {
    console.log(result);
  }
}

main();
