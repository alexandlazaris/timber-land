# timber-land
A memory dump + training ground for all my wood working learning.

* using https://docusaurus.io/ for static site generation
* node v14
* run `yarn install` followed by `yarn start` in root dir to begin the local server


TODO

* make a quiz for guessing timber based of photos
* treated vs un-treated timber
* best uses of countersunk screws
* when to use glue vs screws
* types of joints
* Deployment: try out https://vercel.com/

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
