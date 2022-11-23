# Language Data Commons RO-Crate Profile Validator

This project will validate RO-Crate metadata against the [RO-Crate Metadata Profile for Language Data Commons](https://purl.archive.org/language-data-commons/profile)

# To check a file

To get a complete report on a file, run this:
`
node ldac-check.js  test-data/paradisec/1/ro-crate-metadata.json
`

To get just the errors:

`
node ldac-check.js -e  test-data/paradisec/1/ro-crate-metadata.json
`

Which should produce this output:
```

[
  {
    entity: './',
    property: 'license',
    message: 'License @id does not start with LICENSE',
    clause: 'MUST have a `license` property with reference to an entity of type [File, DataReuseLicense] with an `@id` property that starts with `LICENSE.` and a `URL` property that is a valid URL'
  },
  {
    entity: './',
    property: 'license',
    message: 'There is a reference to a LICENSE entity but it does not have "File" as a type value: {"@id":"_:b0","@type":"CreativeWork","name":"Open (subject to agreeing to PDSC access conditions)"}',
    clause: 'MUST have a `license` property with reference to an entity of type [File, DataReuseLicense] with an `@id` property that starts with `LICENSE.` and a `URL` property that is a valid URL'
  },
  {
    entity: './',
    property: 'license',
    message: 'There is a reference to a LICENSE entity but it does not have "DataReuseLicense" as a @type value: {"@id":"_:b0","@type":"CreativeWork","name":"Open (subject to agreeing to PDSC access conditions)"}',
    clause: 'MUST have a `license` property with reference to an entity of type [File, DataReuseLicense] with an `@id` property that starts with `LICENSE.` and a `URL` property that is a valid URL'
  },
  {
    entity: './',
    property: 'license',
    message: 'There is a reference to a LICENSE entity but it does not have a `URL` property which is a well-formed URL: {"@id":"_:b0","@type":"CreativeWork","name":"Open (subject to agreeing to PDSC access conditions)"}',
    clause: 'MUST have a `license` property with reference to an entity of type [File, DataReuseLicense] with an `@id` property that starts with `LICENSE.` and a `URL` property that is a valid URL'
  }
]



```



# PARADISEC

There are some PARADISEC-specific test that show how to take some test records from PARADISEC created before this profile was developed and firstly make them validate and secondly, demonstrate some optional profile features.

To run the tests.

```
mocha test/validator.paradisec.spec.js
```

