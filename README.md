[![Publish to Github Packages](https://github.com/GentseStudentenraad/npm-example/actions/workflows/publish.yml/badge.svg)](https://github.com/GentseStudentenraad/npm-example/actions/workflows/publish.yml)

# Publish an NPM package

An example on how to publish a TypeScript package to Github using NPM.

### Publishing a package.


Github's CI/CD platform automates all steps. At every Github release, a new version is published. You may also publish manually using the Github Actions web page or API. The sole requirement is that you change all repository references in files such as `package.json` and `.npmrc` to the one you wish to publish to.

### Using the published package.

First, you must create a `.npmrc` file at the root of the repository with the following contents.
```
@gentsestudentenraad:registry=https://npm.pkg.github.com
```

Next, add the dependency to your `package.json` file just like a regular package.

```json
"dependencies": {
  "@gentsestudentenraad/npm-example": "1.0.0"
}
```

That's it!

### Authentication

Please note that for various steps either during installation or publishing you may be required to authenticate. To do so, follow these [these](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages) instructions.
