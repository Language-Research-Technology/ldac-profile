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
  .option(
    '-e,  --errors',
    'Output Errors only'
  )
  

  .action((path) => {
    cratePath = path;
  });

program.parse(process.argv);
const outPath = program.outputPath ? program.outputPath : './';

async function main() {
  var opt = { alwaysAsArray: true, link: true };
  const crate = new ROCrate(
    JSON.parse(
      fs.readFileSync(
        'test-data/paradisec/collection/NT1/ro-crate-metadata.json'
      )
    ),
    opt
  );
  var result = LdacProfile.validate(crate);
  if (program.errors) {
    console.log(result.errors)
  } else {
    console.log(result);
  }

}

main();
