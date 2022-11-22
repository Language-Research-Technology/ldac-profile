const {LdacProfile} = require('./index.js');
const fs = require("fs")

fs.writeFileSync("profile/profile.md", LdacProfile.generateSpec("profile-text/profile.md"));
