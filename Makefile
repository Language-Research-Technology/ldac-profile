md:
	plantuml profile/media/*.puml -tsvg
	node make-profile.js
	pandoc profile/profile.md -o profile/test.html
