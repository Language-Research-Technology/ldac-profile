const {generateSpec} = require('ro-crate-modes');
const fs = require("fs")

mode = require('ro-crate-modes/modes/comprehensive-ldac.json')
fs.writeFileSync("profile/profile.md", generateSpec(mode, "profile-text/profile.md", "examples"));
