# Language Data Commons RO-Crate Profile

This repository is for hosting the [RO-Crate Metadata Profile for Language Data Commons](https://w3id.org/ldac/profile).

This profile can also be updated using the Makefile which generates `profile/profile.md`.

<br>

## Updating profile.md with Makefile

`profile/profile.md` is generated by the `make-profile.js` script and its contents. The script uses the library [ro-crate-modes](https://github.com/Language-Research-Technology/ro-crate-modes) to generate the Markdown file.

If updates are required, edit the following files in this repository:

- `profile-text/profile.md`
- `.puml` files in `profile/media`
- `examples`

Or this file in [ro-crate-modes](https://github.com/Language-Research-Technology/ro-crate-modes):

- `ro-crate-modes/modes/comprehensive-ldac.json`

<br>

### Requirements

#### Install Pandoc

For Mac:

```
brew install pandoc
```

#### Install PlantUML

For Mac:

- Ensure you have Java installed (The minimum version needed is Java 8):

  ```
  java --version
  ```

- Install Graphviz:

  ```
  brew install graphviz
  ```

- Install PlantUML:

  ```
  brew install plantuml
  ```

<br>

### Install Node packages

```
npm install
```

<br>

### Run the Makefile script

```
make md
```
