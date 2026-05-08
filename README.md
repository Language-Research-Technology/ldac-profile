# Language Data Commons RO-Crate Profile and Schema

This repository is for hosting the [RO-Crate Metadata Profile for Language Data Commons](https://w3id.org/ldac/profile) and the [RO-Crate Metadata Schema for Language Data Commons](https://w3id.org/ldac/terms).

This repository uses [ro-crate-masp](https://github.com/Language-Research-Technology/ro-crate-masp) to generate both documents.

<br>

## Install Node packages

```
npm install
```

<br>

## Generate LDAC Profile

```
npm run build:profile
```

`masp-profile/profile-crate/profile-documentation.md` is created from the following files:
- `masp-profile/profile-text.md` - the Markdown text for the profile, where the tables can be specified using:
  - `${rules.all}` — all classes + properties tables
  - `${rules.allDefinedTermSets}` — all DefinedTermSet tables
  - `${rules.allItemLists}` — all ItemList tables
  - `${rules.Dataset}` — the Dataset class table
  - `${rules.RepositoryCollection}` — the RepositoryCollection class table
  - `${rules.RepositoryObject}` — the RepositoryObject class table
  - `${rules.File}` — the File class table
  - `${rules.examples}` — example crate summaries
- `masp-profile/profile-crate/ro-crate-metadata.json` - the JSON-LD metadata for the profile, which is used to populate the tables in the profile

The LDAC profile was previously generated with the scripts and processes in the `archive/` folder of this repository, which has since been archived.

<br>

## Generate LDAC Schema

```
npm run build:schema
```

`masp-schema/schema-crate/schema-documentation.md` is created from the following files:
- `masp-schema/schema-text.md` - the Markdown text for the schema, where the tables can be specified using:
  - `${rules.all}` — all classes + properties tables
  - `${rules.allDefinedTermSets}` — all DefinedTermSet tables
  - `${rules.allItemLists}` — all ItemList tables
  - `${rules.Dataset}` — the Dataset class table
  - `${rules.RepositoryCollection}` — the RepositoryCollection class table
  - `${rules.RepositoryObject}` — the RepositoryObject class table
  - `${rules.File}` — the File class table
- `masp-schema/schema-crate/ro-crate-metadata.json` - the JSON-LD metadata for the schema, which is used to populate the tables in the schema

The LDAC schema was previously generated in the [language-data-commons-vocabs](https://github.com/Language-Research-Technology/language-data-commons-vocabs) repository, which has since been archived.
