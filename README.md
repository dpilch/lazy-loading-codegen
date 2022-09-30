# Lazy Loading Codegen Testing

This repo is used rapidly test lazy loading codegen changes across multiple environments.

## Setup



```
gh repo clone dpilch/lazy-loading-codegen
gh repo clone aws-amplify/amplify-codegen
gh repo clone dpilch/amplify-js
```

Setup JS repo.

```
cd amplify-js
git checkout lazy-type-flag
yarn setup-dev
lerna exec "npm link"
cd ../
```

Setup codegen repo.

```
cd amplify-codegen
gh pr checkout 489
yarn setup-dev
cd ../
```

Setup testing repo.

```
cd lazy-loading-codegen
cd cra
```

Create an amplify app with DataStore using the default Blog schema.

```
amplify init
amplify add api
```

Pull this same app to each other app in the repo. `next`, `no-cra`, `no-react`, `no-typescript`.


Install the apps.

```
./install.sh
```

Generate the codegen types.

```
./generate.sh
```

Then test with build.

```
./build.sh
```

If you see any errors TypeScript errors when running build this may indicate an issue with the types.


You can change to the lazy loading version of DataStore by running link.

```
./link.sh
```

Change back to the current version of DataStore with unlink.
```
./unlink.sh
```

You can change the version of typescript. Specify the version as an argument.

To install TypeScript version 3:
```
./typescript.sh 3
```
