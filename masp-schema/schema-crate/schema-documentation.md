# Language Data Commons Schema

This is a language data schema, in the style of the Schema.org schema. It is based on OLAC terms for use in the LDaCA project and is published at https://w3id.org/ldac/terms. This schema builds on Schema.org and is intended to be used with the Language Data Commons RO-Crate Profile: https://w3id.org/ldac/profile.

## Types of entities (specializations of Classes) and expected Properties


### <a id="CollectionEvent" title="https://w3id.org/ldac/terms#CollectionEvent"></a> Class: Collection Event

A description of an event at which one or more PrimaryMaterials were captured, e.g. as video or audio.

Instances of this type MAY be present in the crate.

| Min Count | Max Count |
| --------- | --------- |
| N/A | N/A |

| Property | Specialization Of | Required | Description | Range | Value |
| -------- | ----------------- | -------- | ----------- | ----- | ----- |
| @type |  | Yes |  |  |  |
| <a href="#collectionEventType" title="https://w3id.org/ldac/terms#collectionEventType">ldac:collectionEventType</a> |  | No | A kind of CollectionEvent characterised by some specific procedures, e.g. a psycholinguistic experiment. | <a href="#CollectionEventTypeTerms" title="https://w3id.org/ldac/terms#CollectionEventTypeTerms">Collection Event Type Terms</a> |  |


### <a id="CollectionProtocol" title="https://w3id.org/ldac/terms#CollectionProtocol"></a> Class: Collection Protocol

A description of how this Object or Collection was obtained, such as the strategy used for selecting written source texts, or the prompts given to participants.

Instances of this type MAY be present in the crate.

| Min Count | Max Count |
| --------- | --------- |
| N/A | N/A |

| Property | Specialization Of | Required | Description | Range | Value |
| -------- | ----------------- | -------- | ----------- | ----- | ----- |
| @type |  | Yes |  |  |  |
| <a href="#collectionProtocolType" title="https://w3id.org/ldac/terms#collectionProtocolType">ldac:collectionProtocolType</a> |  | No | A description of the process used to collect or collate data, such as prompts given to participants, or how texts are selected for inclusion in a collection. | <a href="#CollectionProtocolTypeTerms" title="https://w3id.org/ldac/terms#CollectionProtocolTypeTerms">Collection Protocol Type Terms</a> |  |


### <a id="DataDepositLicense" title="https://w3id.org/ldac/terms#DataDepositLicense"></a> Class: Data Deposit License

A license document setting out terms for deposit into a repository.

Instances of this type MAY be present in the crate.

| Min Count | Max Count |
| --------- | --------- |
| N/A | N/A |

| Property | Specialization Of | Required | Description | Range | Value |
| -------- | ----------------- | -------- | ----------- | ----- | ----- |
| @type |  | Yes |  |  |  |
*No properties defined for this class*



### <a id="DataLicense" title="https://w3id.org/ldac/terms#DataLicense"></a> Class: Data License

A license document for data licensing. This is a superclass of DataReuseLicense and DataDepositLicense.

Instances of this type MAY be present in the crate.

| Min Count | Max Count |
| --------- | --------- |
| N/A | N/A |

| Property | Specialization Of | Required | Description | Range | Value |
| -------- | ----------------- | -------- | ----------- | ----- | ----- |
| @type |  | Yes |  |  |  |
| <a href="#reviewDate" title="https://w3id.org/ldac/terms#reviewDate">ldac:reviewDate</a> |  | No | The date that this license should be reviewed. |  |  |


### <a id="DataReuseLicense" title="https://w3id.org/ldac/terms#DataReuseLicense"></a> Class: Data Reuse License

A license document, setting out terms for reuse of data.

Instances of this type MAY be present in the crate.

| Min Count | Max Count |
| --------- | --------- |
| N/A | N/A |

| Property | Specialization Of | Required | Description | Range | Value |
| -------- | ----------------- | -------- | ----------- | ----- | ----- |
| @type |  | Yes |  |  |  |
| <a href="#access" title="https://w3id.org/ldac/terms#access">ldac:access</a> |  | No | Whether this is an open or restricted access license. | <a href="#AccessTypes" title="https://w3id.org/ldac/terms#AccessTypes">Access Types</a> |  |
| <a href="#accessControlList" title="https://w3id.org/ldac/terms#accessControlList">ldac:accessControlList</a> |  | No | When a license has an authorizationWorkflow property with a value of the DefinedTerm AcessControlList this property has a URI value that points to a list of userIDs. | <a href="http://schema.org/URL" title="http://schema.org/URL" target="_blank" rel="noopener">URL</a> |  |
| <a href="#authorizationWorkflow" title="https://w3id.org/ldac/terms#authorizationWorkflow">ldac:authorizationWorkflow</a> |  | No | By what process a user is granted authorization to a license. | <a href="#AuthorizationWorkflows" title="https://w3id.org/ldac/terms#AuthorizationWorkflows">Authorization Workflows</a> |  |

## All Properties

### <a id="access" title="https://w3id.org/ldac/terms#access"></a> Property: Access

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#access" title="https://w3id.org/ldac/terms#access">ldac:access</a> |  | Whether this is an open or restricted access license. | <a href="#AccessTypes" title="https://w3id.org/ldac/terms#AccessTypes">Access Types</a> | <a href="#DataReuseLicense" title="https://w3id.org/ldac/terms#DataReuseLicense">Data Reuse License</a> |
### <a id="accessControlList" title="https://w3id.org/ldac/terms#accessControlList"></a> Property: Access Control List

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#accessControlList" title="https://w3id.org/ldac/terms#accessControlList">ldac:accessControlList</a> |  | When a license has an authorizationWorkflow property with a value of the DefinedTerm AcessControlList this property has a URI value that points to a list of userIDs. | <a href="http://schema.org/URL" title="http://schema.org/URL" target="_blank" rel="noopener">URL</a> | <a href="#DataReuseLicense" title="https://w3id.org/ldac/terms#DataReuseLicense">Data Reuse License</a> |
### <a id="age" title="https://w3id.org/ldac/terms#age"></a> Property: Age

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#age" title="https://w3id.org/ldac/terms#age">ldac:age</a> |  | The age or age range of a person, e.g. 25, 30-50, >50. If an age is specified, a specializationOf pointing to a 'canonical' ageless version of that Person can also be included. | <a href="http://schema.org/Text" title="http://schema.org/Text" target="_blank" rel="noopener">Text</a> | <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> |
### <a id="annotationOf" title="https://w3id.org/ldac/terms#annotationOf"></a> Property: Annotation Of

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#annotationOf" title="https://w3id.org/ldac/terms#annotationOf">ldac:annotationOf</a> |  | This resource contains some kind of description that adds information to the resource it references. | <a href="#PrimaryMaterial" title="https://w3id.org/ldac/terms#PrimaryMaterial">Primary Material</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="annotationType" title="https://w3id.org/ldac/terms#annotationType"></a> Property: Annotation Type

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#annotationType" title="https://w3id.org/ldac/terms#annotationType">ldac:annotationType</a> |  | The type of annotation for Annotation resources. | <a href="#AnnotationTypeTerms" title="https://w3id.org/ldac/terms#AnnotationTypeTerms">Annotation Type Terms</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="annotator" title="https://w3id.org/ldac/terms#annotator"></a> Property: Annotator

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#annotator" title="https://w3id.org/ldac/terms#annotator">ldac:annotator</a> |  | The participant produced an annotation of this or a related resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="authorizationWorkflow" title="https://w3id.org/ldac/terms#authorizationWorkflow"></a> Property: Authorization Workflow

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#authorizationWorkflow" title="https://w3id.org/ldac/terms#authorizationWorkflow">ldac:authorizationWorkflow</a> |  | By what process a user is granted authorization to a license. | <a href="#AuthorizationWorkflows" title="https://w3id.org/ldac/terms#AuthorizationWorkflows">Authorization Workflows</a> | <a href="#DataReuseLicense" title="https://w3id.org/ldac/terms#DataReuseLicense">Data Reuse License</a> |
### <a id="channels" title="https://w3id.org/ldac/terms#channels"></a> Property: Channels

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#channels" title="https://w3id.org/ldac/terms#channels">ldac:channels</a> |  | The number of audio channels this resource contains (e.g. 1, 2, 5.1). |  | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="collectionEventType" title="https://w3id.org/ldac/terms#collectionEventType"></a> Property: Collection Event Type

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#collectionEventType" title="https://w3id.org/ldac/terms#collectionEventType">ldac:collectionEventType</a> |  | A kind of CollectionEvent characterised by some specific procedures, e.g. a psycholinguistic experiment. | <a href="#CollectionEventTypeTerms" title="https://w3id.org/ldac/terms#CollectionEventTypeTerms">Collection Event Type Terms</a> | <a href="#CollectionEvent" title="https://w3id.org/ldac/terms#CollectionEvent">Collection Event</a> |
### <a id="collectionProtocolType" title="https://w3id.org/ldac/terms#collectionProtocolType"></a> Property: Collection Protocol Type

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#collectionProtocolType" title="https://w3id.org/ldac/terms#collectionProtocolType">ldac:collectionProtocolType</a> |  | A description of the process used to collect or collate data, such as prompts given to participants, or how texts are selected for inclusion in a collection. | <a href="#CollectionProtocolTypeTerms" title="https://w3id.org/ldac/terms#CollectionProtocolTypeTerms">Collection Protocol Type Terms</a> | <a href="#CollectionProtocol" title="https://w3id.org/ldac/terms#CollectionProtocol">Collection Protocol</a> |
### <a id="communicationMode" title="https://w3id.org/ldac/terms#communicationMode"></a> Property: Communication Mode

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#communicationMode" title="https://w3id.org/ldac/terms#communicationMode">ldac:communicationMode</a> |  | The mode (spoken, written, signed etc.) of this resource. There may be more than one value for this property. | <a href="#CommunicationModeTerms" title="https://w3id.org/ldac/terms#CommunicationModeTerms">Communication Mode Terms</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="compiler" title="https://w3id.org/ldac/terms#compiler"></a> Property: Compiler

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#compiler" title="https://w3id.org/ldac/terms#compiler">ldac:compiler</a> |  | The participant is responsible for collecting the sub-parts of the resource together. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="consultant" title="https://w3id.org/ldac/terms#consultant"></a> Property: Consultant

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#consultant" title="https://w3id.org/ldac/terms#consultant">ldac:consultant</a> |  | The participant contributes expertise to the creation of a work, for example by contributing knowledge of their native language. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="dataInputter" title="https://w3id.org/ldac/terms#dataInputter"></a> Property: Data Inputter

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#dataInputter" title="https://w3id.org/ldac/terms#dataInputter">ldac:dataInputter</a> |  | The participant was responsible for entering, re-typing, and/or structuring the data contained in the resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="dateFreeText" title="https://w3id.org/ldac/terms#dateFreeText"></a> Property: Date Free Text

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#dateFreeText" title="https://w3id.org/ldac/terms#dateFreeText">ldac:dateFreeText</a> |  | Date information that cannot be put in one of the standard date formats, e.g. "mid-1970s", or it is not clear, for example, if it is a creation or publication date. |  | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="depositor" title="https://w3id.org/ldac/terms#depositor"></a> Property: Depositor

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#depositor" title="https://w3id.org/ldac/terms#depositor">ldac:depositor</a> |  | The participant was responsible for depositing the resource in an archive. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="derivationOf" title="https://w3id.org/ldac/terms#derivationOf"></a> Property: Derivation Of

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#derivationOf" title="https://w3id.org/ldac/terms#derivationOf">ldac:derivationOf</a> |  | This property references another resource from which the current resource is derived, e.g. downsampling audio or video files, or extracting text from a PDF. | <a href="#Annotation" title="https://w3id.org/ldac/terms#Annotation">Annotation</a>, <a href="#PrimaryMaterial" title="https://w3id.org/ldac/terms#PrimaryMaterial">Primary Material</a> | <a href="#DerivedMaterial" title="https://w3id.org/ldac/terms#DerivedMaterial">Derived Material</a> |
### <a id="developer" title="https://w3id.org/ldac/terms#developer"></a> Property: Developer

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#developer" title="https://w3id.org/ldac/terms#developer">ldac:developer</a> |  | The participant developed the methodology or tools (including software) that constitute the resource, or that were used to create the resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="doi" title="https://w3id.org/ldac/terms#doi"></a> Property: DOI

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#doi" title="https://w3id.org/ldac/terms#doi">ldac:doi</a> |  | A Digital Object Identifier. |  | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="editor" title="https://w3id.org/ldac/terms#editor"></a> Property: Editor

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#editor" title="https://w3id.org/ldac/terms#editor">ldac:editor</a> |  | The participant reviewed, corrected, and/or tested the resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="geoJSON" title="https://w3id.org/ldac/terms#geoJSON"></a> Property: GeoJSON

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#geoJSON" title="https://w3id.org/ldac/terms#geoJSON">ldac:geoJSON</a> |  | A valid GEOJson feature or feature collection as a string that can be parsed as JSON. | Text | <a href="http://schema.org/GeoCoordinates" title="http://schema.org/GeoCoordinates" target="_blank" rel="noopener">GeoCoordinates</a>, <a href="http://schema.org/GeoShape" title="http://schema.org/GeoShape" target="_blank" rel="noopener">GeoShape</a>, <a href="http://schema.org/Language" title="http://schema.org/Language" target="_blank" rel="noopener">Language</a> |
### <a id="hasAnnotation" title="https://w3id.org/ldac/terms#hasAnnotation"></a> Property: Has Annotation

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#hasAnnotation" title="https://w3id.org/ldac/terms#hasAnnotation">ldac:hasAnnotation</a> |  | This resource is referenced by another resource that describes it such as a translation, transcription or other analysis. | <a href="#Annotation" title="https://w3id.org/ldac/terms#Annotation">Annotation</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="hasCollectionProtocol" title="https://w3id.org/ldac/terms#hasCollectionProtocol"></a> Property: Has Collection Protocol

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#hasCollectionProtocol" title="https://w3id.org/ldac/terms#hasCollectionProtocol">ldac:hasCollectionProtocol</a> |  | This resource was assembled or collected according to the linked protocol. | <a href="#CollectionProtocol" title="https://w3id.org/ldac/terms#CollectionProtocol">Collection Protocol</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="hasDerivation" title="https://w3id.org/ldac/terms#hasDerivation"></a> Property: Has Derivation

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#hasDerivation" title="https://w3id.org/ldac/terms#hasDerivation">ldac:hasDerivation</a> |  | This property references another resource that is derived from it such as a downsampled audio or video file, or text extracted from a PDF. | <a href="#DerivedMaterial" title="https://w3id.org/ldac/terms#DerivedMaterial">Derived Material</a> | <a href="#PrimaryMaterial" title="https://w3id.org/ldac/terms#PrimaryMaterial">Primary Material</a> |
### <a id="illustrator" title="https://w3id.org/ldac/terms#illustrator"></a> Property: Illustrator

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#illustrator" title="https://w3id.org/ldac/terms#illustrator">ldac:illustrator</a> |  | The participant contributed drawings or other illustrations to the resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="indexableText" title="https://w3id.org/ldac/terms#indexableText"></a> Property: Indexable Text

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#indexableText" title="https://w3id.org/ldac/terms#indexableText">ldac:indexableText</a> |  | One or more target File(s) that together contain the full text of an item – each file should indicate its language. | <a href="http://schema.org/MediaObject" title="http://schema.org/MediaObject" target="_blank" rel="noopener">MediaObject</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="interpreter" title="https://w3id.org/ldac/terms#interpreter"></a> Property: Interpreter

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#interpreter" title="https://w3id.org/ldac/terms#interpreter">ldac:interpreter</a> |  | The contributor renders the discourse recorded in the resource into another language in real time, or the contributor explains the discourse recorded in the resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="interviewee" title="https://w3id.org/ldac/terms#interviewee"></a> Property: Interviewee

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#interviewee" title="https://w3id.org/ldac/terms#interviewee">ldac:interviewee</a> |  | The participant was a respondent in an interview. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="interviewer" title="https://w3id.org/ldac/terms#interviewer"></a> Property: Interviewer

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#interviewer" title="https://w3id.org/ldac/terms#interviewer">ldac:interviewer</a> |  | The participant conducted an interview that forms part of the resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="isDeIdentified" title="https://w3id.org/ldac/terms#isDeIdentified"></a> Property: Is De-Identified

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#isDeIdentified" title="https://w3id.org/ldac/terms#isDeIdentified">ldac:isDeIdentified</a> |  | The data in this item has had potentially identifying information removed, which may include replacing names with pseudonyms. | <a href="http://schema.org/Boolean" title="http://schema.org/Boolean" target="_blank" rel="noopener">Boolean</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> |
### <a id="itemLocation" title="https://w3id.org/ldac/terms#itemLocation"></a> Property: Item Location

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#itemLocation" title="https://w3id.org/ldac/terms#itemLocation">ldac:itemLocation</a> |  | Current location of the item, e.g. where a set of audio tapes are stored. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Place" title="http://schema.org/Place" target="_blank" rel="noopener">Place</a> | <a href="http://pcdm.org/models#Object" title="http://pcdm.org/models#Object" target="_blank" rel="noopener">Object</a>, <a href="http://schema.org/Collection" title="http://schema.org/Collection" target="_blank" rel="noopener">Collection</a> |
### <a id="linguisticGenre" title="https://w3id.org/ldac/terms#linguisticGenre"></a> Property: Linguistic Genre

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#linguisticGenre" title="https://w3id.org/ldac/terms#linguisticGenre">ldac:linguisticGenre</a> |  | A linguistic classification of the genre of this resource. | <a href="#LinguisticGenreTerms" title="https://w3id.org/ldac/terms#LinguisticGenreTerms">Linguistic Genre Terms</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="mainText" title="https://w3id.org/ldac/terms#mainText"></a> Property: Main Text

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#mainText" title="https://w3id.org/ldac/terms#mainText">ldac:mainText</a> |  | Identifies the most relevant sub-component for computational text analytics. | <a href="http://schema.org/MediaObject" title="http://schema.org/MediaObject" target="_blank" rel="noopener">MediaObject</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="material" title="https://w3id.org/ldac/terms#material"></a> Property: Material

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#material" title="https://w3id.org/ldac/terms#material">ldac:material</a> |  | Description of the original media, e.g. audio cassette tapes, participant questionnaires, field notes. |  | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="materialType" title="https://w3id.org/ldac/terms#materialType"></a> Property: Material Type

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#materialType" title="https://w3id.org/ldac/terms#materialType">ldac:materialType</a> |  | Indicates whether the material in a file is the original (primary) source or is derived from it or describes it via annotation. | <a href="#MaterialTypes" title="https://w3id.org/ldac/terms#MaterialTypes">Material Types</a> | <a href="http://schema.org/MediaObject" title="http://schema.org/MediaObject" target="_blank" rel="noopener">MediaObject</a> |
### <a id="openAccessIndex" title="https://w3id.org/ldac/terms#openAccessIndex"></a> Property: Open Access Index

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#openAccessIndex" title="https://w3id.org/ldac/terms#openAccessIndex">ldac:openAccessIndex</a> |  | One or more public index types allowed by a license, e.g. FullText indexing may be allowed for discovery even when an item is not. | <a href="#IndexTypes" title="https://w3id.org/ldac/terms#IndexTypes">Index Types</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="orthographicNotes" title="https://w3id.org/ldac/terms#orthographicNotes"></a> Property: Orthographic Notes

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#orthographicNotes" title="https://w3id.org/ldac/terms#orthographicNotes">ldac:orthographicNotes</a> |  | A description of the specific orthographic writing system(s) used in the material (e.g. Latin, Cyrillic, Australian English, IPA), or particular conventions required to understand the material (e.g. O* = ø). | <a href="http://schema.org/Text" title="http://schema.org/Text" target="_blank" rel="noopener">Text</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="participant" title="https://w3id.org/ldac/terms#participant"></a> Property: Participant

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#participant" title="https://w3id.org/ldac/terms#participant">ldac:participant</a> |  | The participant was present during the creation of the resource, but did not contribute substantially to its content. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="performer" title="https://w3id.org/ldac/terms#performer"></a> Property: Performer

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#performer" title="https://w3id.org/ldac/terms#performer">ldac:performer</a> |  | The participant performed some portion of a recorded, filmed, or transcribed resource. It is recommended that this term be used only for creative participants whose role is not better indicated by a more specific term, such as 'speaker', 'signer', or 'singer'. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="photographer" title="https://w3id.org/ldac/terms#photographer"></a> Property: Photographer

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#photographer" title="https://w3id.org/ldac/terms#photographer">ldac:photographer</a> |  | The participant took the photograph, or shot the film, that appears in or constitutes the resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="recorder" title="https://w3id.org/ldac/terms#recorder"></a> Property: Recorder

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#recorder" title="https://w3id.org/ldac/terms#recorder">ldac:recorder</a> |  | The participant operated the recording machinery used to create the resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="register" title="https://w3id.org/ldac/terms#register"></a> Property: Register

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#register" title="https://w3id.org/ldac/terms#register">ldac:register</a> |  | The type of register (any of the varieties of a language that a speaker uses in a particular social context [Merriam-Webster]) of the contents of a language resource. |  | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="researchParticipant" title="https://w3id.org/ldac/terms#researchParticipant"></a> Property: Research Participant

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#researchParticipant" title="https://w3id.org/ldac/terms#researchParticipant">ldac:researchParticipant</a> |  | The participant acted as a research subject or responded to a questionnaire, the results of which study form the basis of the resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="researcher" title="https://w3id.org/ldac/terms#researcher"></a> Property: Researcher

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#researcher" title="https://w3id.org/ldac/terms#researcher">ldac:researcher</a> |  | The resource was created as part of the participant's research, or the research presents interim or final results from the participant's research. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="responder" title="https://w3id.org/ldac/terms#responder"></a> Property: Responder

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#responder" title="https://w3id.org/ldac/terms#responder">ldac:responder</a> |  | The participant was an interlocutor in some sort of discourse event, but only reacted to the contributions of others. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="reviewDate" title="https://w3id.org/ldac/terms#reviewDate"></a> Property: Review Date

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#reviewDate" title="https://w3id.org/ldac/terms#reviewDate">ldac:reviewDate</a> |  | The date that this license should be reviewed. |  | <a href="#DataLicense" title="https://w3id.org/ldac/terms#DataLicense">Data License</a> |
### <a id="signer" title="https://w3id.org/ldac/terms#signer"></a> Property: Signer

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#signer" title="https://w3id.org/ldac/terms#signer">ldac:signer</a> |  | The contributor was a principal signer in a resource that consists of a recording, a film, or a transcription of a recorded resource. Signers are those whose gestures predominate in a recorded or filmed resource. (The resource may be a transcription of that recording). | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="singer" title="https://w3id.org/ldac/terms#singer"></a> Property: Singer

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#singer" title="https://w3id.org/ldac/terms#singer">ldac:singer</a> |  | The participant sang, either individually or as part of a group, in a resource that consists of a recording, a film, or a transcription of a recorded resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="speaker" title="https://w3id.org/ldac/terms#speaker"></a> Property: Speaker

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#speaker" title="https://w3id.org/ldac/terms#speaker">ldac:speaker</a> |  | The contributor was a principal speaker in a resource that consists of a recording, a film, or a transcription of a recorded resource. Speakers are those whose voices predominate in a recorded or filmed resource. (The resource may be a transcription of that recording). | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="sponsor" title="https://w3id.org/ldac/terms#sponsor"></a> Property: Sponsor

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#sponsor" title="https://w3id.org/ldac/terms#sponsor">ldac:sponsor</a> |  | The participant contributed financial support to the creation of the resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="subjectLanguage" title="https://w3id.org/ldac/terms#subjectLanguage"></a> Property: Subject Language

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#subjectLanguage" title="https://w3id.org/ldac/terms#subjectLanguage">ldac:subjectLanguage</a> |  | The language(s) that this annotation resource is about. | <a href="http://schema.org/Language" title="http://schema.org/Language" target="_blank" rel="noopener">Language</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="transcriber" title="https://w3id.org/ldac/terms#transcriber"></a> Property: Transcriber

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#transcriber" title="https://w3id.org/ldac/terms#transcriber">ldac:transcriber</a> |  | The participant produced a transcription of this or a related resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="translator" title="https://w3id.org/ldac/terms#translator"></a> Property: Translator

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#translator" title="https://w3id.org/ldac/terms#translator">ldac:translator</a> |  | The participant produced a translation of this or a related resource. | <a href="http://schema.org/Organization" title="http://schema.org/Organization" target="_blank" rel="noopener">Organization</a>, <a href="http://schema.org/Person" title="http://schema.org/Person" target="_blank" rel="noopener">Person</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |
### <a id="writtenLanguageFormat" title="https://w3id.org/ldac/terms#writtenLanguageFormat"></a> Property: Written Language Format

| Property | Specialization Of | Description | Range | Occurs in Domain(s) |
| -------- | ----------------- | ----------- | ----------- | ----------- |
| <a href="#writtenLanguageFormat" title="https://w3id.org/ldac/terms#writtenLanguageFormat">ldac:writtenLanguageFormat</a> |  | The format of the resource resulting from the way the text was produced (handwritten, typeset, typewritten). | <a href="#WrittenLanguageTypeTerms" title="https://w3id.org/ldac/terms#WrittenLanguageTypeTerms">Written Language Type Terms</a> | <a href="http://schema.org/CreativeWork" title="http://schema.org/CreativeWork" target="_blank" rel="noopener">CreativeWork</a> |


## Defined Term Sets

### <a id="AccessTypes"></a>Defined Term Set: Access Types

ID: https://w3id.org/ldac/terms#AccessTypes

A set of defined terms to specify whether a DataReuseLicense allows open or restricted (authorised) access.

| Term | Description |
| ---- | ----------- |
| <a id="AuthorizedAccess" href="https://w3id.org/ldac/terms#AuthorizedAccess" target="_blank" rel="noopener">Authorized Access</a> | Indicates that a DataReuseLicense requires some kind of authorization step, from SelfAuthorization (click-through) to processes that require a data steward to grant permission. |
| <a id="OpenAccess" href="https://w3id.org/ldac/terms#OpenAccess" target="_blank" rel="noopener">Open Access</a> | Data covered by this license may be accessed as long as the license is served alongside it, and does not require any specific authorization step. |

### <a id="AnnotationTypeTerms"></a>Defined Term Set: Annotation Type Terms

ID: https://w3id.org/ldac/terms#AnnotationTypeTerms

The set of expected values for annotation types.

| Term | Description |
| ---- | ----------- |
| <a id="Gestural" href="https://w3id.org/ldac/terms#Gestural" target="_blank" rel="noopener">Gestural</a> | The resource describes the gestural content of the resource it annotates. |
| <a id="Orthographic" href="https://w3id.org/ldac/terms#Orthographic" target="_blank" rel="noopener">Orthographic</a> | The resource contains annotations using orthography (a writing system) as opposed to a coded representation such as a phonetic transcription. |
| <a id="PartOfSpeech" href="https://w3id.org/ldac/terms#PartOfSpeech" target="_blank" rel="noopener">Part Of Speech</a> | An annotation that assigns lexical elements of language to classes on the basis of their distributional properties (for sign languages, the term 'sign class' is appropriate). |
| <a id="Phonemic" href="https://w3id.org/ldac/terms#Phonemic" target="_blank" rel="noopener">Phonemic</a> | An annotation that represents speech in terms of the sound contrasts made in a language. |
| <a id="Phonetic" href="https://w3id.org/ldac/terms#Phonetic" target="_blank" rel="noopener">Phonetic</a> | A representation of speech in terms of the sounds produced, typically using the International Phonetic Alphabet. |
| <a id="Phonological" href="https://w3id.org/ldac/terms#Phonological" target="_blank" rel="noopener">Phonological</a> | An annotation that includes information about the sound system of a language, such as the contrasts between sounds which make up the sound system and the locally conditioned realisations of sounds which characterise speech in the language. |
| <a id="Prosodic" href="https://w3id.org/ldac/terms#Prosodic" target="_blank" rel="noopener">Prosodic</a> | An annotation that provides a symbolic record of intonation, stress, tone or other suprasegmental features, which is expressed independently of regular phonetic transcription. |
| <a id="Semantic" href="https://w3id.org/ldac/terms#Semantic" target="_blank" rel="noopener">Semantic</a> | The resource includes annotation or analysis concerning the encoding of meaning. |
| <a id="Syntactic" href="https://w3id.org/ldac/terms#Syntactic" target="_blank" rel="noopener">Syntactic</a> | The resource contains annotation or analysis describing the combinatorial patterns of words in another resource. |
| <a id="Transcription" href="https://w3id.org/ldac/terms#Transcription" target="_blank" rel="noopener">Transcription</a> | The resource contains a transcription, which is a written representation (orthographic or coded) of an audio or visual signal. |
| <a id="Translation" href="https://w3id.org/ldac/terms#Translation" target="_blank" rel="noopener">Translation</a> | This is a translation of a resource in another language. |

### <a id="AuthorizationWorkflows"></a>Defined Term Set: Authorization Workflows

ID: https://w3id.org/ldac/terms#AuthorizationWorkflows

A set of DefinedTerms for access authorization mechanisms - some of these may be combined, e.g. AccessControlList and AgreeToTerms, but SelfAuthorization and AgreeToTerms would be redundant.

| Term | Description |
| ---- | ----------- |
| <a id="AccessControlList" href="https://w3id.org/ldac/terms#AccessControlList" target="_blank" rel="noopener">Access Control List</a> | License grants access to data based on a list of approved users, specified using the property accessControlList. |
| <a id="AgreeToTerms" href="https://w3id.org/ldac/terms#AgreeToTerms" target="_blank" rel="noopener">Agree To Terms</a> | A user is expected to explicitly agree to a set of license terms, this may be combined with AccessControlList - to note that even if a user has been pre-approved for a license they must agree to license terms. |
| <a id="AuthorizationByApplication" href="https://w3id.org/ldac/terms#AuthorizationByApplication" target="_blank" rel="noopener">Authorization By Application</a> | Users may apply for a license via some workflow, such as a form, with the decision being made by a DataSteward or their delegate about whether to grant the license. |
| <a id="AuthorizationByInvitation" href="https://w3id.org/ldac/terms#AuthorizationByInvitation" target="_blank" rel="noopener">Authorization By Invitation</a> | A data steward or administrator is expected to use an access control system to invite users, for example, participants, collaborators or students. |
| <a id="SelfAuthorization" href="https://w3id.org/ldac/terms#SelfAuthorization" target="_blank" rel="noopener">Self Authorization</a> | A user can be authorised to access data by clicking that they agree to a license, or filling out a form to check their understanding, which can be validated by a machine and does not require human intervention. |

### <a id="CollectionEventTypeTerms"></a>Defined Term Set: Collection Event Type Terms

ID: https://w3id.org/ldac/terms#CollectionEventTypeTerms

A set of terms which are expected values for CollectionEvent types.

| Term | Description |
| ---- | ----------- |
| <a id="Session" href="https://w3id.org/ldac/terms#Session" target="_blank" rel="noopener">Session</a> | A collection event that is a recording or elicitation session with participants. |

### <a id="CollectionProtocolTypeTerms"></a>Defined Term Set: Collection Protocol Type Terms

ID: https://w3id.org/ldac/terms#CollectionProtocolTypeTerms

A set of terms which are expected values for CollectionProtocol types.

| Term | Description |
| ---- | ----------- |
| <a id="ElicitationTask" href="https://w3id.org/ldac/terms#ElicitationTask" target="_blank" rel="noopener">Elicitation Task</a> | The collection protocol includes a task-based prompt to participants. |
| <a id="MaterialSelectionCriteria" href="https://w3id.org/ldac/terms#MaterialSelectionCriteria" target="_blank" rel="noopener">Material Selection Criteria</a> | A description of the criteria used to select texts in a collection. |

### <a id="CommunicationModeTerms"></a>Defined Term Set: Communication Mode Terms

ID: https://w3id.org/ldac/terms#CommunicationModeTerms

A set of expected values for the property communicationMode.

| Term | Description |
| ---- | ----------- |
| <a id="Gesture" href="https://w3id.org/ldac/terms#Gesture" target="_blank" rel="noopener">Gesture</a> | The resource contains non-linguistic gestural communication (i.e. not sign language). |
| <a id="SignedLanguage" href="https://w3id.org/ldac/terms#SignedLanguage" target="_blank" rel="noopener">Signed Language</a> | The resource contains data for which the medium of interaction was signing. |
| <a id="Song" href="https://w3id.org/ldac/terms#Song" target="_blank" rel="noopener">Song</a> | "Words or sounds [articulated] in succession with musical inflections or modulations of the voice" OED. |
| <a id="SpokenLanguage" href="https://w3id.org/ldac/terms#SpokenLanguage" target="_blank" rel="noopener">Spoken Language</a> | The resource contains data for which the medium of interaction was speech. |
| <a id="WhistledLanguage" href="https://w3id.org/ldac/terms#WhistledLanguage" target="_blank" rel="noopener">Whistled Language</a> | The resource contains data for which the medium of interaction was whistling. |
| <a id="WrittenLanguage" href="https://w3id.org/ldac/terms#WrittenLanguage" target="_blank" rel="noopener">Written Language</a> | The resource contains data for which the medium of interaction was writing. |

### <a id="IndexTypes"></a>Defined Term Set: Index Types

ID: https://w3id.org/ldac/terms#IndexTypes

A set of defined terms for types of indexing, such as FullText.

| Term | Description |
| ---- | ----------- |
| <a id="FullText" href="https://w3id.org/ldac/terms#FullText" target="_blank" rel="noopener">Full Text</a> | A text index that makes the full text of a data resource findable via a search interface. |

### <a id="LinguisticGenreTerms"></a>Defined Term Set: Linguistic Genre Terms

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
| <a id="Ludic" href="https://w3id.org/ldac/terms#Ludic" target="_blank" rel="noopener">Ludic</a> | Ludic discourse is language whose primary function is to be part of play, or a style of speech that involves a creative manipulation of the structures of the language. Examples of ludic discourse are play languages, jokes, secret languages, and speech disguises. |
| <a id="Narrative" href="https://w3id.org/ldac/terms#Narrative" target="_blank" rel="noopener">Narrative</a> | A discourse, monologic or co-constructed, which represents temporally organised events. Types of narratives include historical, traditional, and personal narratives, myths, folktales, fables, and humorous stories. |
| <a id="Oratory" href="https://w3id.org/ldac/terms#Oratory" target="_blank" rel="noopener">Oratory</a> | The art of public speaking, or of speaking eloquently according to rules or conventions. Examples of oratory include sermons, lectures, political speeches, and invocations. |
| <a id="Procedural" href="https://w3id.org/ldac/terms#Procedural" target="_blank" rel="noopener">Procedural</a> | An explanation or description of a method, process, or situation having ordered steps. |
| <a id="Report" href="https://w3id.org/ldac/terms#Report" target="_blank" rel="noopener">Report</a> | A factual account of some event or circumstance. |
| <a id="Thesaurus" href="https://w3id.org/ldac/terms#Thesaurus" target="_blank" rel="noopener">Thesaurus</a> | The resource contains a list or data structure consisting of words or concepts arranged according to sense. |

### <a id="MaterialTypes"></a>Defined Term Set: Material Types

ID: https://w3id.org/ldac/terms#MaterialTypes

A set of terms describing the relationship of a resource to the original data source.

*No terms defined for this term set*


### <a id="WrittenLanguageTypeTerms"></a>Defined Term Set: Written Language Type Terms

ID: https://w3id.org/ldac/terms#WrittenLanguageTypeTerms

A set of expected types for WrittenLanguage communication mode (this set is incomplete - more work needed).

| Term | Description |
| ---- | ----------- |
| <a id="Handwritten" href="https://w3id.org/ldac/terms#Handwritten" target="_blank" rel="noopener">Handwritten</a> | The resource was written using a writing implement such as a pen, pencil, brush or computer stylus (except where the digital handwriting is converted to standard text). |
| <a id="Typeset" href="https://w3id.org/ldac/terms#Typeset" target="_blank" rel="noopener">Typeset</a> | The resource has been formatted for printing or display. |
| <a id="Typewritten" href="https://w3id.org/ldac/terms#Typewritten" target="_blank" rel="noopener">Typewritten</a> | The resource contains text produced on a typewriter. |

