# SETUP

## Create nx project

`npx create-nx-workspace@latest nx-angular-standalone --preset=angular-standalone`

## Run project

run via npm script
or
`npx nx serve`

## Run test

```
npx nx test
```

```
npx nx lint
```

## Run multiple parallelly

```
npx nx run-many -t build test lint
```

## Check what cli command available for a particular libary

```
npx nx list @nx/angular
```

## Run a cli command

```
npx nx g @nx/angular:component hello-world --standalone --dry-run
```

Alternatively, using Nx vscode extension

## Run build

```
npx nx build
```

## Generate a library

```
npx nx g @nx/angular:library modules/products 
npx nx g @nx/angular:library modules/orders 
npx nx g @nx/angular:library modules/shared/ui 
```

## Check graph
```
npx nx graph
```