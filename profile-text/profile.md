---
title: Language Data Commons RO-Crate Profile
---

This document is a DRAFT RO-Crate profile for Language Data resources. The
profile specifies the contents of RO-Crate Metadata Documents for language
resources and gives guidance on how to structure language data collections both
at the RO-Crate package level and in a repository containing multiple packages.

This profile assumes that the principles and standards set out in the Arkisto
platform, or similar compatible approaches, are being used.

The core metadata vocabularies for this profile are:

- RO-Crate recommendations for data packaging and basic discoverability metadata
  which is mostly Schema.org terms with a handful of additions. Following
  RO-Crate practice, basic metadata terms such as "who, what, where" and
  bibliographic-style descriptions are chosen from Schema.org (in preference to
  other vocabularies such as Dublin Core or FOAF) where possible with domain-specific
  vocabularies used for things which are not common across domains
  (such as types of language).

- An updated version of the Open Language Archives Community (OLAC) vocabularies
  [http://www.language-archives.org](http://www.language-archives.org);
  originally expressed as XML schemas. The new vocabulary is under development
  here:
  [https://purl.archive.org/language-data-commons/terms](https://purl.archive.org/textcommons/terms)

# Audience

This document is primarily for use by tool developers, data scientists
and metadata specialists developing scripts or systems for user
communities. It is not intended for use by non-specialists.

Just as we would not expect repository users to type in Dublin Core
metadata in XML format by hand we do not expect our users to have to
deal directly with the JSON-LD presented here, this document is for tool
developers to build systems that crosswalk data from existing systems,
or allow for user-friendly data entry.

# About this profile

This profile covers various kinds of crate metadata:

- **Structural** RO-Crate metadata - how the root dataset links to files, and
  the abstract structure of nested collections (e.g. collections/corpora or other
  curated datasets) and objects of study; linguistic Items, Sessions or Texts).
  This profile assumes that a repository (for example, an OCFL storage root,
  with an API for accessing it) exists and that it can at a minimum support 
  (a)  listing all items of the repository and returning their RO-Crate metadata, and 
  (b) retrieving an item given its ID.

- **Types of language data** - is this resource a dialogue? A written text? A
  transcript or other annotation - which file has which kind of data in it? What
  is inside CSV and other structured files? The vocabulary used for
  language-specific data is the
  [Language Data Commons vocabulary](http://purl.archive.org/language-data-commons/terms)
  which is being developed alongside this profile. The vocabulary is described
  here: <http://purl.archive.org/language-data-commons/terms>

- **Contextual metadata** - how to link people who had speaking,
  authoring, collection roles, places, subjects.

# Structural metadata

The structural elements of a Language Data Commons RO-Crate are:

- A Collection / Object hierarchy to allow language data to be
  grouped - for example, a corpus with sub-corpora, or collections of
  items (objects) from a particular region.

- Dataset and File entities (as per RO-Crate). Files may be referenced
  locally or via URI, e.g. from an API. If an RO-Crate contains files
  they MUST be linked to the root dataset using \`hasPart\`
  relationships as per the RO-Crate specification.

NOTE: The terms Collection and Object
are encoded in RO-Crate metadata using RepositoryCollection and
RepositoryObject types respectively. These in turn are re-named versions
of the Portland Common Data Model types,
[pcdm:Collection](https://pcdm.org/2016/04/18/models#Collection)
and
[pcdm:Object](https://pcdm.org/2016/04/18/models#Object).

A conformant RO-Crate:

${rules.Dataset}

![](media/structure.svg)

A collection such as a corpus may be stored in a repository or
transmitted either as:

- A **distributed** collection: a set of individual RO-Crates which
  reference separate collection records with one Object and one
  Collection per crate.

- A **bundled** single crate which contains all the Collection and
  Object data.

Distributed Collections may reference member collections or Objects in
hasMember property but should not include descriptions of Objects that
are stored elsewhere in the repository.

Objects are placed in a Collection using the \`memberOf\` property (\`pcdm:memberOf\`), which is required. The reverse may also be encoded using the \`hasMember\` property on a Collection.

The following diagram shows how these relationships are encoded in a single "bundled" RO-Crate.

![](media/bundled-crate.svg)

The next diagram shows how distributed crates (with one RO-Crate per Object and Collection) are linked.

![](media/distributed-crates.svg)

Which linking strategy is used is an implementation choice for
repository developers.


## When to choose collection-as-crate ("bundled") vs collection-in-multiple crates ("distributed")

- Use a single bundled crate for a collection when all of these conditions are true:

  - The collection is final and is expected to be stable, i.e. there is
    negligible chance of having to withdraw any of its contents or
    files.

  - The collection and all its files can easily be transferred in a
    single transaction - say 2Gb total.

  - All the material in the corpus shares the same license for reuse.

- Split a collection into fragmented RepositoryCollection and
  RepositoryObject crates, with one crate per repository object,
  when any of these conditions are true:

  - The collection is not yet stable:

    -   New items are being added or changed.

    -   There is a chance that some data may have to be taken down or withdrawn at the request of participants.

  - The total size of the collection will present challenges for
    data transfer.

  - There is more than one data reuse license applicable.

## Collection

A collection is a group of related Objects. Examples of collections
include corpora, and sub-corpora, as well as aggregations of cultural
objects such as PARADISEC collections which bring together items
collected in a region or on a session with informants. This follows the
Alveo usage:

> Items \[*Objects* in this model\] are grouped into collections which might
> correspond to curated corpora such as ACE or informal collections such as a
> sample of documents from the AustLit archive
> ([http://www.austlit.edu.au/](http://www.austlit.edu.au/)).

When an RO-Crate is used to package a collection that is part of
another Collection it has a memberOf property which references a
resolvable ID (within the context of a repository or service) of the
parent Collection. The Collection may also list its members in a hasMember
property, but this is not required.

The root dataset must have at least these \@type values: \["Dataset",
"RepositoryCollection"\]

### A RepositoryCollection:

${rules.RepositoryCollection}

## Object

An Object is a single unit linked to tightly related files, for example,
a dialogue or session in a speech study, or a work (document) in a written
corpus. This is based on the use of the term _Item_ in Alveo:

>The data model that we have developed for the storage of language
>resources is built around the concept of an item which corresponds
>(loosely) to a record of a single communication event. An item is
>often associated with a single text, audio or video resource but could
>include a number of resources, for example, the different channels of
>audio recording, or an audio recording and associated textual
>transcript. Items are grouped into collections which might correspond
>to curated corpora such as ACE or informal collections such as a
>sample of documents from the AustLit archive
>(<http://www.austlit.edu.au/>).
><https://www.researchonline.mq.edu.au/vital/access/services/Download/mq:37347/DS01>

The definition of an object is necessarily loose and needs to reflect
what data owners have chosen to do with their collections in the past.

If an RO-Crate contains a single Object the Root Dataset would have a
\`@type\` property of ["Dataset", "RepositoryObject"] with a
conformsTo property pointing to the language-data-commons Object profile
(this document).

If an RO-Crate contains an entire collection then each Object has a
\`@type\` property of ["Dataset", "RepositoryObject"] and a conformsTo
property referencing this document. For example:

Objects SHOULD have files (which may be included in an RO-Crate for the
object, or as part of a collection crate).

In this example the Object in question is an interview from a speech
corpus with three files. The diagram shows the relationships between
the object and its files (and the contextual metadata of a Person who
takes the role of the speaker/informant (discussed in more detail
below).

![](media/object-structure.svg)

There are a number of terms that can be used to characterise resources -
these use the Schema.org mechanism of DefinedTerm and DefinedTermSet.

### A RepositoryObject:

${rules.RepositoryObject}

## Files

There are three important types of files (or references to other
works) that may be included: \`PrimaryMaterial\` which is a recording or
original text, or a citation of or proxy for it, \`DerivedMaterial\` which
has been generated or sampled from primary material by a process such as format
conversion or digitization, and \`Annotation\`, which contains one or more types of
analysis of the \`PrimaryMaterial\` or \`DerivedMaterial\`.

### PrimaryMaterial

\`PrimaryMaterial\` may be a video or audio file if it is available or may be a ContextualEntity referencing a primary text such as a book.


#### A [File, PrimaryMaterial]:

${rules.PrimaryMaterial}

### DerivedMaterial

DerivedMaterial is a non-analytical derivation from PrimaryMaterial, for example, downsampled video or excerpted text.


${rules.DerivedMaterial}


#### a [File, DerivedMaterial]:

${rules.DerivedMaterial}

### Annotation

An annotation is a description or analysis of other material. More than one type of annotation may be present in a file.

#### a [File, Annotation]:

${rules.Annotation}

#### Describing the columns in CSV or other tabular data Annotation

CSV or similar tabular files are often used to represent transcribed
speech or sign language data, sometimes also with time codes. To enable
automated location of which column is which, use a [frictionless Table
Schema](https://specs.frictionlessdata.io/table-schema/) described by a File entity in the crate. 

For example:
${exampleEntities('art', ['art_schema.json'])}


### Language

#### A [Language] entity:

${rules.Language}

## Places



The place in which data was collected may be indicated using the \`contentLocation\` property. 


${exampleEntities('paradisec-item-NT1-001', ['./', 'https://www.ethnologue.com/country/VU', '#Vanuatu'])}



# Identifiers

Identifiers for Objects and Collections MUST be URIs.

Internally, identifiers for all entities that do not have their own URIs
may use the Archive and Packaging identifier scheme ([ARCP]), which allows for a DNS-like namespacing of
identifiers. For example, the Sydney Speaks corpus top-level
collection would have the ID:

    arcp://name,http://www.dynamicsoflanguage.edu.au/sydney-speaks/corpus/

A sub-corpus (collection) would have an ID like:

    arcp://name,http://www.dynamicsoflanguage.edu.au/sydney-speaks/corpus/collection/SSP

An object:

    arcp://name,http://www.dynamicsoflanguage.edu.au/sydney-speaks/corpus/object/331

A person:

    arcp://name,http://www.dynamicsoflanguage.edu.au/sydney-speaks/corpus/person/54


## How to record people's contributions

Some corpora express ages and other demographics of participants - this
presents a data modelling challenge, as age and some other variables change
over time, so if the same person appears over time then we need to have a
base Person with DoB etc. and then time-based instances of the person
with an age, social status, gender etc. *at that time*.

There are three levels at which contributions to an object can be
modelled:

1.  Include one or more Person items as context in a crate and reference
    them with properties such as schema:creator or the
    language-data-commons contribution properties such as [ldac:compiler]
    or [ldac:depositor]. The \@id of the person MUST be a URI and SHOULD
    be re-used where the same person appears in multiple objects in a
    collection or repository.

2.  For longitudinal studies where it is important to record changing
    demographic information for a Person, or where precision is
    required in listing contributions to a work use
    [ldac:PersonSnapshot].

3.  If it is important to record lots of contributions to a work (e.g. in
    analysis of a joint work) use schema:Action. If more precision is
    required in describing the provenance of items, e.g. this work on
    [The Declaration of Rights of Man and of the
    Citizen](https://www.uts.edu.au/about/faculty-design-architecture-and-building/staff-showcase/writing-rights)
    (Lorber-Kasunic & Sweetapple).

    NOTE: If this approach is used, special care will have to be taken in
    developing user interfaces and/or training communities to use this way
    of modelling metadata; the user need not see the underlying
    structure. This profile does not give advice about how to do this as
    we have not seen a use case that requires it.

## Collection events such as "Sessions"

Where data is collected from participants in a speech study with
elicitation tasks such as "sessions" (see this [IMDI
document]](https://www.mpi.nl/ISLE/documents/draft/ISLE_MetaData_2.5.pdf))
or field interviews this can be recorded in metadata via the
CollectionEvent class.

The indirection in this conforms-to relationship is to allow multiple
objects to have a conformsTo property which indicates that they conform
to the _same_ schema while having a local copy of the schema, as per
RO-Crate best practice of having all local context to use a data
packages in the package where possible.

# References

Himmelmann, Nikolaus P. 2012. Linguistic data types and the interface
between language documentation and description. _Language documentation
& conservation_. University of Hawai'i Press 6. 187--207.

Paterson, Hugh Joseph. 2021. _Language Archive Records: Interoperability
of Referencing Practices and Metadata Models_. United States \-- North
Dakota: The University of North Dakota M.A.
[https://www.proquest.com/docview/2550236802/abstract/22686A0E508D4E5CPQ/1](https://www.proquest.com/docview/2550236802/abstract/22686A0E508D4E5CPQ/1)
(3 May 2022).

# EXAMPLES

[https://www.mpi.nl/ISLE/documents/docs_frame.html](https://www.mpi.nl/ISLE/documents/docs_frame.html)




[ldac:PersonSnapshot]: https://purl.archive.org/language-data-commons/terms#PersonSnapshot
[ldac:depositor]: https://purl.archive.org/language-data-commons/terms#depositor
[ldac:compiler]: https://purl.archive.org/language-data-commons/terms#compiler
