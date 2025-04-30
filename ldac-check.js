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
  .option('-c, --collate', 'Collate errors and warnings')

  .action(main);

program.parse(process.argv);


function collate(result) {
  const collated = {};
  for( const k in result ) {
    collated[k] = {};
    result[k].map((o) => {
      if( !(o.clause in collated[k]) ) {
        collated[k][o.clause] = [];
      }
      collated[k][o.clause].push(o.entity);
    });
    for( const clause in collated[k] ) {
      collated[k][clause].sort();
    }
  }
  return collated;
}


function print_results(result) {
    console.log(JSON.stringify(result, null, 4));
}


function main(cratePath, options) {
  try {
    const opt = { alwaysAsArray: true, link: true };
    const crate = new ROCrate(JSON.parse(fs.readFileSync(cratePath, 'utf8')), opt);
    const result = LdacProfile.validate(crate);
    if (options.collate) {
      const collated = collate(result);
      print_results(options.errors ? collated.errors : collated);
    } else {
      print_results(options.errors ? result.errors : result)
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error: File not found - '${cratePath}'`);
    } else {
      console.error(error);
    }
  }
}

