const {Profile} = require('ro-crate-editor-profiles');
const fs = require("fs")

profile = require('ro-crate-editor-profiles/profiles/language-data-commons-collection-profile.json')
fs.writeFileSync("profile/profile.md", Profile.generateSpec(profile, "profile-text/profile.md", "examples"));
