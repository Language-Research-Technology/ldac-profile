# Language Data Commons Schema

This is a language data schema, in the style of the Schema.org schema. It is based on OLAC terms for use in the LDaCA project and is published at https://w3id.org/ldac/terms. This schema builds on Schema.org and is intended to be used with the Language Data Commons RO-Crate Profile: https://w3id.org/ldac/profile.

## Types of entities (specializations of Classes) and expected Properties


### <a id="CollectionEvent"></a> Class: CollectionEvent

A description of an event at which one or more PrimaryMaterials were captured, e.g. as video or audio.

Instances of this type MAY be present in the crate.

| Min Count | Max Count |
| --------- | --------- |
| N/A | N/A |

| Property | Required | Description | Range | Value |
| -------- | -------- | ----------- | ----- | ----- |
| @type | Yes |  |  |  |
| <a href="#collectionEventType">collectionEventType</a> | No | A kind of CollectionEvent characterised by some specific procedures, e.g. a psycholinguistic experiment. | [Session](#Session) |  |


### <a id="CollectionProtocol"></a> Class: CollectionProtocol

A description of how this Object or Collection was obtained, such as the strategy used for selecting written source texts, or the prompts given to participants.

Instances of this type MAY be present in the crate.

| Min Count | Max Count |
| --------- | --------- |
| N/A | N/A |

| Property | Required | Description | Range | Value |
| -------- | -------- | ----------- | ----- | ----- |
| @type | Yes |  |  |  |
| <a href="#collectionProtocolType">collectionProtocolType</a> | No | A description of the process used to collect or collate data, such as prompts given to participants, or how texts are selected for inclusion in a collection. |  |  |


### <a id="DataDepositLicense"></a> Class: DataDepositLicense

A license document setting out terms for deposit into a repository.

Instances of this type MAY be present in the crate.

| Min Count | Max Count |
| --------- | --------- |
| N/A | N/A |

| Property | Required | Description | Range | Value |
| -------- | -------- | ----------- | ----- | ----- |
| @type | Yes |  |  |  |
*No properties defined for this class*



### <a id="DataLicense"></a> Class: DataLicense

A license document for data licensing. This is a superclass of DataReuseLicense and DataDepositLicense.

Instances of this type MAY be present in the crate.

| Min Count | Max Count |
| --------- | --------- |
| N/A | N/A |

| Property | Required | Description | Range | Value |
| -------- | -------- | ----------- | ----- | ----- |
| @type | Yes |  |  |  |
| <a href="#reviewDate">reviewDate</a> | No | The date that this license should be reviewed. |  |  |


### <a id="DataReuseLicense"></a> Class: DataReuseLicense

A license document, setting out terms for reuse of data.

Instances of this type MAY be present in the crate.

| Min Count | Max Count |
| --------- | --------- |
| N/A | N/A |

| Property | Required | Description | Range | Value |
| -------- | -------- | ----------- | ----- | ----- |
| @type | Yes |  |  |  |
| <a href="#access">access</a> | No | Whether this is an open or restricted access license. |  |  |
| <a href="#accessControlList">accessControlList</a> | No | When a license has an authorizationWorkflow property with a value of the DefinedTerm AcessControlList this property has a URI value that points to a list of userIDs. | [URL](http://schema.org/URL) |  |
| <a href="#authorizationWorkflow">authorizationWorkflow</a> | No | By what process a user is granted authorization to a license. |  |  |

## All Properties

### <a id="access"></a> Property: access

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| Whether this is an open or restricted access license. |  | [DataReuseLicense](#DataReuseLicense) |
### <a id="accessControlList"></a> Property: accessControlList

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| When a license has an authorizationWorkflow property with a value of the DefinedTerm AcessControlList this property has a URI value that points to a list of userIDs. | [URL](http://schema.org/URL) | [DataReuseLicense](#DataReuseLicense) |
### <a id="age"></a> Property: age

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The age or age range of a person, e.g. 25, 30-50, >50. If an age is specified, a specializationOf pointing to a 'canonical' ageless version of that Person can also be included. | [Text](http://schema.org/Text) | [Person](http://schema.org/Person) |
### <a id="annotationOf"></a> Property: annotationOf

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| This resource contains some kind of description that adds information to the resource it references. | [PrimaryMaterial](#PrimaryMaterial) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="annotationType"></a> Property: annotationType

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The type of annotation for Annotation resources. |  | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="annotator"></a> Property: annotator

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant produced an annotation of this or a related resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="authorizationWorkflow"></a> Property: authorizationWorkflow

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| By what process a user is granted authorization to a license. |  | [DataReuseLicense](#DataReuseLicense) |
### <a id="channels"></a> Property: channels

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The number of audio channels this resource contains (e.g. 1, 2, 5.1). |  | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="collectionEventType"></a> Property: collectionEventType

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| A kind of CollectionEvent characterised by some specific procedures, e.g. a psycholinguistic experiment. | [Session](#Session) | [CollectionEvent](#CollectionEvent) |
### <a id="collectionProtocolType"></a> Property: collectionProtocolType

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| A description of the process used to collect or collate data, such as prompts given to participants, or how texts are selected for inclusion in a collection. |  | [CollectionProtocol](#CollectionProtocol) |
### <a id="communicationMode"></a> Property: communicationMode

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The mode (spoken, written, signed etc.) of this resource. There may be more than one value for this property. |  | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="compiler"></a> Property: compiler

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant is responsible for collecting the sub-parts of the resource together. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="consultant"></a> Property: consultant

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant contributes expertise to the creation of a work, for example by contributing knowledge of their native language. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="dataInputter"></a> Property: dataInputter

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant was responsible for entering, re-typing, and/or structuring the data contained in the resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="dateFreeText"></a> Property: dateFreeText

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| Date information that cannot be put in one of the standard date formats, e.g. "mid-1970s", or it is not clear, for example, if it is a creation or publication date. |  | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="depositor"></a> Property: depositor

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant was responsible for depositing the resource in an archive. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="derivationOf"></a> Property: derivationOf

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| This property references another resource from which the current resource is derived, e.g. downsampling audio or video files, or extracting text from a PDF. | [Annotation](#Annotation), [PrimaryMaterial](#PrimaryMaterial) | [DerivedMaterial](#DerivedMaterial) |
### <a id="developer"></a> Property: developer

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant developed the methodology or tools (including software) that constitute the resource, or that were used to create the resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="doi"></a> Property: doi

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| A Digital Object Identifier. |  | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="editor"></a> Property: editor

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant reviewed, corrected, and/or tested the resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="geoJSON"></a> Property: geoJSON

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| A valid GEOJson feature or feature collection as a string that can be parsed as JSON. | Text | [GeoCoordinates](http://schema.org/GeoCoordinates), [GeoShape](http://schema.org/GeoShape), [Language](http://schema.org/Language) |
### <a id="hasAnnotation"></a> Property: hasAnnotation

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| This resource is referenced by another resource that describes it such as a translation, transcription or other analysis. | [Annotation](#Annotation) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="hasCollectionProtocol"></a> Property: hasCollectionProtocol

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| This resource was assembled or collected according to the linked protocol. | [CollectionProtocol](#CollectionProtocol) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="hasDerivation"></a> Property: hasDerivation

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| This property references another resource that is derived from it such as a downsampled audio or video file, or text extracted from a PDF. | [DerivedMaterial](#DerivedMaterial) | [PrimaryMaterial](#PrimaryMaterial) |
### <a id="illustrator"></a> Property: illustrator

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant contributed drawings or other illustrations to the resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="indexableText"></a> Property: indexableText

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| One or more target File(s) that together contain the full text of an item – each file should indicate its language. | [MediaObject](http://schema.org/MediaObject) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="interpreter"></a> Property: interpreter

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The contributor renders the discourse recorded in the resource into another language in real time, or the contributor explains the discourse recorded in the resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="interviewee"></a> Property: interviewee

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant was a respondent in an interview. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="interviewer"></a> Property: interviewer

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant conducted an interview that forms part of the resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="isDeIdentified"></a> Property: isDeIdentified

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The data in this item has had potentially identifying information removed, which may include replacing names with pseudonyms. | [Boolean](http://schema.org/Boolean) | [CreativeWork](http://schema.org/CreativeWork), [Person](http://schema.org/Person) |
### <a id="itemLocation"></a> Property: itemLocation

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| Current location of the item, e.g. where a set of audio tapes are stored. | [Organization](http://schema.org/Organization), [Place](http://schema.org/Place) | [Object](http://pcdm.org/models#Object), [Collection](http://schema.org/Collection) |
### <a id="linguisticGenre"></a> Property: linguisticGenre

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| A linguistic classification of the genre of this resource. |  | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="mainText"></a> Property: mainText

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| Identifies the most relevant sub-component for computational text analytics. | [MediaObject](http://schema.org/MediaObject) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="material"></a> Property: material

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| Description of the original media, e.g. audio cassette tapes, participant questionnaires, field notes. |  | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="materialType"></a> Property: materialType

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| Indicates whether the material in a file is the original (primary) source or is derived from it or describes it via annotation. |  | [MediaObject](http://schema.org/MediaObject) |
### <a id="openAccessIndex"></a> Property: openAccessIndex

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| One or more public index types allowed by a license, e.g. FullText indexing may be allowed for discovery even when an item is not. |  | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="orthographicNotes"></a> Property: orthographicNotes

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| A description of the specific orthographic writing system(s) used in the material (e.g. Latin, Cyrillic, Australian English, IPA), or particular conventions required to understand the material (e.g. O* = ø). | [Text](http://schema.org/Text) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="participant"></a> Property: participant

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant was present during the creation of the resource, but did not contribute substantially to its content. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="performer"></a> Property: performer

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant performed some portion of a recorded, filmed, or transcribed resource. It is recommended that this term be used only for creative participants whose role is not better indicated by a more specific term, such as 'speaker', 'signer', or 'singer'. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="photographer"></a> Property: photographer

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant took the photograph, or shot the film, that appears in or constitutes the resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="recorder"></a> Property: recorder

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant operated the recording machinery used to create the resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="register"></a> Property: register

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The type of register (any of the varieties of a language that a speaker uses in a particular social context [Merriam-Webster]) of the contents of a language resource. |  | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="researcher"></a> Property: researcher

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The resource was created as part of the participant's research, or the research presents interim or final results from the participant's research. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="researchParticipant"></a> Property: researchParticipant

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant acted as a research subject or responded to a questionnaire, the results of which study form the basis of the resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="responder"></a> Property: responder

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant was an interlocutor in some sort of discourse event, but only reacted to the contributions of others. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="reviewDate"></a> Property: reviewDate

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The date that this license should be reviewed. |  | [DataLicense](#DataLicense) |
### <a id="signer"></a> Property: signer

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The contributor was a principal signer in a resource that consists of a recording, a film, or a transcription of a recorded resource. Signers are those whose gestures predominate in a recorded or filmed resource. (The resource may be a transcription of that recording). | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="singer"></a> Property: singer

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant sang, either individually or as part of a group, in a resource that consists of a recording, a film, or a transcription of a recorded resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="speaker"></a> Property: speaker

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The contributor was a principal speaker in a resource that consists of a recording, a film, or a transcription of a recorded resource. Speakers are those whose voices predominate in a recorded or filmed resource. (The resource may be a transcription of that recording). | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="sponsor"></a> Property: sponsor

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant contributed financial support to the creation of the resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="subjectLanguage"></a> Property: subjectLanguage

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The language(s) that this annotation resource is about. | [Language](http://schema.org/Language) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="transcriber"></a> Property: transcriber

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant produced a transcription of this or a related resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="translator"></a> Property: translator

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The participant produced a translation of this or a related resource. | [Organization](http://schema.org/Organization), [Person](http://schema.org/Person) | [CreativeWork](http://schema.org/CreativeWork) |
### <a id="writtenLanguageFormat"></a> Property: writtenLanguageFormat

| Description | Range | Occurs in Domain(s) |
| ----------- | ----------- | ----------- |
| The format of the resource resulting from the way the text was produced (handwritten, typeset, typewritten). |  | [CreativeWork](http://schema.org/CreativeWork) |


## Defined Term Sets

### <a id="AccessTypes"></a>Defined Term Set: AccessTypes

ID: https://w3id.org/ldac/terms#AccessTypes

A set of defined terms to specify whether a DataReuseLicense allows open or restricted (authorised) access.

| Term | Description |
| ---- | ----------- |
| <a id="access" href="https://w3id.org/ldac/terms#access" target="_blank" rel="noopener">access</a> | Whether this is an open or restricted access license. |
| <a id="AuthorizedAccess" href="https://w3id.org/ldac/terms#AuthorizedAccess" target="_blank" rel="noopener">AuthorizedAccess</a> | Indicates that a DataReuseLicense requires some kind of authorization step, from SelfAuthorization (click-through) to processes that require a data steward to grant permission. |
| <a id="OpenAccess" href="https://w3id.org/ldac/terms#OpenAccess" target="_blank" rel="noopener">OpenAccess</a> | Data covered by this license may be accessed as long as the license is served alongside it, and does not require any specific authorization step. |

### <a id="AnnotationTypeTerms"></a>Defined Term Set: AnnotationTypeTerms

ID: https://w3id.org/ldac/terms#AnnotationTypeTerms

The set of expected values for annotation types.

| Term | Description |
| ---- | ----------- |
| <a id="annotationType" href="https://w3id.org/ldac/terms#annotationType" target="_blank" rel="noopener">annotationType</a> | The type of annotation for Annotation resources. |
| <a id="Gestural" href="https://w3id.org/ldac/terms#Gestural" target="_blank" rel="noopener">Gestural</a> | The resource describes the gestural content of the resource it annotates. |
| <a id="Orthographic" href="https://w3id.org/ldac/terms#Orthographic" target="_blank" rel="noopener">Orthographic</a> | The resource contains annotations using orthography (a writing system) as opposed to a coded representation such as a phonetic transcription. |
| <a id="PartOfSpeech" href="https://w3id.org/ldac/terms#PartOfSpeech" target="_blank" rel="noopener">PartOfSpeech</a> | An annotation that assigns lexical elements of language to classes on the basis of their distributional properties (for sign languages, the term 'sign class' is appropriate). |
| <a id="Phonemic" href="https://w3id.org/ldac/terms#Phonemic" target="_blank" rel="noopener">Phonemic</a> | An annotation that represents speech in terms of the sound contrasts made in a language. |
| <a id="Phonetic" href="https://w3id.org/ldac/terms#Phonetic" target="_blank" rel="noopener">Phonetic</a> | A representation of speech in terms of the sounds produced, typically using the International Phonetic Alphabet. |
| <a id="Phonological" href="https://w3id.org/ldac/terms#Phonological" target="_blank" rel="noopener">Phonological</a> | An annotation that includes information about the sound system of a language, such as the contrasts between sounds which make up the sound system and the locally conditioned realisations of sounds which characterise speech in the language. |
| <a id="Prosodic" href="https://w3id.org/ldac/terms#Prosodic" target="_blank" rel="noopener">Prosodic</a> | An annotation that provides a symbolic record of intonation, stress, tone or other suprasegmental features, which is expressed independently of regular phonetic transcription. |
| <a id="Semantic" href="https://w3id.org/ldac/terms#Semantic" target="_blank" rel="noopener">Semantic</a> | The resource includes annotation or analysis concerning the encoding of meaning. |
| <a id="Syntactic" href="https://w3id.org/ldac/terms#Syntactic" target="_blank" rel="noopener">Syntactic</a> | The resource contains annotation or analysis describing the combinatorial patterns of words in another resource. |
| <a id="Transcription" href="https://w3id.org/ldac/terms#Transcription" target="_blank" rel="noopener">Transcription</a> | The resource contains a transcription, which is a written representation (orthographic or coded) of an audio or visual signal. |
| <a id="Translation" href="https://w3id.org/ldac/terms#Translation" target="_blank" rel="noopener">Translation</a> | This is a translation of a resource in another language. |

### <a id="AuthorizationWorkflows"></a>Defined Term Set: AuthorizationWorkflows

ID: https://w3id.org/ldac/terms#AuthorizationWorkflows

A set of DefinedTerms for access authorization mechanisms - some of these may be combined, e.g. AccessControlList and AgreeToTerms, but SelfAuthorization and AgreeToTerms would be redundant.

| Term | Description |
| ---- | ----------- |
| <a id="AccessControlList" href="https://w3id.org/ldac/terms#AccessControlList" target="_blank" rel="noopener">AccessControlList</a> | License grants access to data based on a list of approved users, specified using the property accessControlList. |
| <a id="AgreeToTerms" href="https://w3id.org/ldac/terms#AgreeToTerms" target="_blank" rel="noopener">AgreeToTerms</a> | A user is expected to explicitly agree to a set of license terms, this may be combined with AccessControlList - to note that even if a user has been pre-approved for a license they must agree to license terms. |
| <a id="AuthorizationByApplication" href="https://w3id.org/ldac/terms#AuthorizationByApplication" target="_blank" rel="noopener">AuthorizationByApplication</a> | Users may apply for a license via some workflow, such as a form, with the decision being made by a DataSteward or their delegate about whether to grant the license. |
| <a id="AuthorizationByInvitation" href="https://w3id.org/ldac/terms#AuthorizationByInvitation" target="_blank" rel="noopener">AuthorizationByInvitation</a> | A data steward or administrator is expected to use an access control system to invite users, for example, participants, collaborators or students. |
| <a id="authorizationWorkflow" href="https://w3id.org/ldac/terms#authorizationWorkflow" target="_blank" rel="noopener">authorizationWorkflow</a> | By what process a user is granted authorization to a license. |
| <a id="SelfAuthorization" href="https://w3id.org/ldac/terms#SelfAuthorization" target="_blank" rel="noopener">SelfAuthorization</a> | A user can be authorised to access data by clicking that they agree to a license, or filling out a form to check their understanding, which can be validated by a machine and does not require human intervention. |

### <a id="CollectionEventTypeTerms"></a>Defined Term Set: CollectionEventTypeTerms

ID: https://w3id.org/ldac/terms#CollectionEventTypeTerms

A set of terms which are expected values for CollectionEvent types.

| Term | Description |
| ---- | ----------- |
| <a id="collectionEventType" href="https://w3id.org/ldac/terms#collectionEventType" target="_blank" rel="noopener">collectionEventType</a> | A kind of CollectionEvent characterised by some specific procedures, e.g. a psycholinguistic experiment. |
| <a id="Session" href="https://w3id.org/ldac/terms#Session" target="_blank" rel="noopener">Session</a> | A collection event that is a recording or elicitation session with participants. |

### <a id="CollectionProtocolTypeTerms"></a>Defined Term Set: CollectionProtocolTypeTerms

ID: https://w3id.org/ldac/terms#CollectionProtocolTypeTerms

A set of terms which are expected values for CollectionProtocol types.

| Term | Description |
| ---- | ----------- |
| <a id="collectionProtocolType" href="https://w3id.org/ldac/terms#collectionProtocolType" target="_blank" rel="noopener">collectionProtocolType</a> | A description of the process used to collect or collate data, such as prompts given to participants, or how texts are selected for inclusion in a collection. |
| <a id="ElicitationTask" href="https://w3id.org/ldac/terms#ElicitationTask" target="_blank" rel="noopener">ElicitationTask</a> | The collection protocol includes a task-based prompt to participants. |
| <a id="MaterialSelectionCriteria" href="https://w3id.org/ldac/terms#MaterialSelectionCriteria" target="_blank" rel="noopener">MaterialSelectionCriteria</a> | A description of the criteria used to select texts in a collection. |

### <a id="CommunicationModeTerms"></a>Defined Term Set: CommunicationModeTerms

ID: https://w3id.org/ldac/terms#CommunicationModeTerms

A set of expected values for the property communicationMode.

| Term | Description |
| ---- | ----------- |
| <a id="communicationMode" href="https://w3id.org/ldac/terms#communicationMode" target="_blank" rel="noopener">communicationMode</a> | The mode (spoken, written, signed etc.) of this resource. There may be more than one value for this property. |
| <a id="Gesture" href="https://w3id.org/ldac/terms#Gesture" target="_blank" rel="noopener">Gesture</a> | The resource contains non-linguistic gestural communication (i.e. not sign language). |
| <a id="SignedLanguage" href="https://w3id.org/ldac/terms#SignedLanguage" target="_blank" rel="noopener">SignedLanguage</a> | The resource contains data for which the medium of interaction was signing. |
| <a id="Song" href="https://w3id.org/ldac/terms#Song" target="_blank" rel="noopener">Song</a> | "Words or sounds [articulated] in succession with musical inflections or modulations of the voice" OED. |
| <a id="SpokenLanguage" href="https://w3id.org/ldac/terms#SpokenLanguage" target="_blank" rel="noopener">SpokenLanguage</a> | The resource contains data for which the medium of interaction was speech. |
| <a id="WhistledLanguage" href="https://w3id.org/ldac/terms#WhistledLanguage" target="_blank" rel="noopener">WhistledLanguage</a> | The resource contains data for which the medium of interaction was whistling. |
| <a id="WrittenLanguage" href="https://w3id.org/ldac/terms#WrittenLanguage" target="_blank" rel="noopener">WrittenLanguage</a> | The resource contains data for which the medium of interaction was writing. |

### <a id="IndexTypes"></a>Defined Term Set: IndexTypes

ID: https://w3id.org/ldac/terms#IndexTypes

A set of defined terms for types of indexing, such as FullText.

| Term | Description |
| ---- | ----------- |
| <a id="FullText" href="https://w3id.org/ldac/terms#FullText" target="_blank" rel="noopener">FullText</a> | A text index that makes the full text of a data resource findable via a search interface. |
| <a id="openAccessIndex" href="https://w3id.org/ldac/terms#openAccessIndex" target="_blank" rel="noopener">openAccessIndex</a> | One or more public index types allowed by a license, e.g. FullText indexing may be allowed for discovery even when an item is not. |

### <a id="LinguisticGenreTerms"></a>Defined Term Set: LinguisticGenreTerms

ID: https://w3id.org/ldac/terms#LinguisticGenreTerms

A set of expected values for the linguistic genre of a resource.

| Term | Description |
| ---- | ----------- |
| <a id="Dialogue" href="https://w3id.org/ldac/terms#Dialogue" target="_blank" rel="noopener">Dialogue</a> | An interactive discourse with two or more participants. Examples of dialogues include conversations, interviews, correspondence, consultations, greetings and leave-takings. |
| <a id="Drama" href="https://w3id.org/ldac/terms#Drama" target="_blank" rel="noopener">Drama</a> | A planned, creative, rendition of discourse with two or more participants intended for presentation to an audience. |
| <a id="Formulaic" href="https://w3id.org/ldac/terms#Formulaic" target="_blank" rel="noopener">Formulaic</a> | The resource is a ritually or conventionally structured discourse. |
| <a id="Informational" href="https://w3id.org/ldac/terms#Informational" target="_blank" rel="noopener">Informational</a> | Discourse whose primary purpose is to inform the audience about the natural or social world. |
| <a id="Interview" href="https://w3id.org/ldac/terms#Interview" target="_blank" rel="noopener">Interview</a> | The resource is a conversation where one or more speakers are directing the conversation. |
| <a id="Lexicon" href="https://w3id.org/ldac/terms#Lexicon" target="_blank" rel="noopener">Lexicon</a> | The resource includes a systematic listing of lexical items. |
| <a id="linguisticGenre" href="https://w3id.org/ldac/terms#linguisticGenre" target="_blank" rel="noopener">linguisticGenre</a> | A linguistic classification of the genre of this resource. |
| <a id="Ludic" href="https://w3id.org/ldac/terms#Ludic" target="_blank" rel="noopener">Ludic</a> | Ludic discourse is language whose primary function is to be part of play, or a style of speech that involves a creative manipulation of the structures of the language. Examples of ludic discourse are play languages, jokes, secret languages, and speech disguises. |
| <a id="Narrative" href="https://w3id.org/ldac/terms#Narrative" target="_blank" rel="noopener">Narrative</a> | A discourse, monologic or co-constructed, which represents temporally organised events. Types of narratives include historical, traditional, and personal narratives, myths, folktales, fables, and humorous stories. |
| <a id="Oratory" href="https://w3id.org/ldac/terms#Oratory" target="_blank" rel="noopener">Oratory</a> | The art of public speaking, or of speaking eloquently according to rules or conventions. Examples of oratory include sermons, lectures, political speeches, and invocations. |
| <a id="Procedural" href="https://w3id.org/ldac/terms#Procedural" target="_blank" rel="noopener">Procedural</a> | An explanation or description of a method, process, or situation having ordered steps. |
| <a id="Report" href="https://w3id.org/ldac/terms#Report" target="_blank" rel="noopener">Report</a> | A factual account of some event or circumstance. |
| <a id="Thesaurus" href="https://w3id.org/ldac/terms#Thesaurus" target="_blank" rel="noopener">Thesaurus</a> | The resource contains a list or data structure consisting of words or concepts arranged according to sense. |

### <a id="MaterialTypes"></a>Defined Term Set: MaterialTypes

ID: https://w3id.org/ldac/terms#MaterialTypes

A set of terms describing the relationship of a resource to the original data source.

| Term | Description |
| ---- | ----------- |
| <a id="materialType" href="https://w3id.org/ldac/terms#materialType" target="_blank" rel="noopener">materialType</a> | Indicates whether the material in a file is the original (primary) source or is derived from it or describes it via annotation. |

### <a id="WrittenLanguageTypeTerms"></a>Defined Term Set: WrittenLanguageTypeTerms

ID: https://w3id.org/ldac/terms#WrittenLanguageTypeTerms

A set of expected types for WrittenLanguage communication mode (this set is incomplete - more work needed).

| Term | Description |
| ---- | ----------- |
| <a id="Handwritten" href="https://w3id.org/ldac/terms#Handwritten" target="_blank" rel="noopener">Handwritten</a> | The resource was written using a writing implement such as a pen, pencil, brush or computer stylus (except where the digital handwriting is converted to standard text). |
| <a id="Typeset" href="https://w3id.org/ldac/terms#Typeset" target="_blank" rel="noopener">Typeset</a> | The resource has been formatted for printing or display. |
| <a id="Typewritten" href="https://w3id.org/ldac/terms#Typewritten" target="_blank" rel="noopener">Typewritten</a> | The resource contains text produced on a typewriter. |
| <a id="writtenLanguageFormat" href="https://w3id.org/ldac/terms#writtenLanguageFormat" target="_blank" rel="noopener">writtenLanguageFormat</a> | The format of the resource resulting from the way the text was produced (handwritten, typeset, typewritten). |

