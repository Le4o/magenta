# Magenta
### AdonisJS application 

This framework comes with pre-installed: 

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

You need to install: 

1. Vow Provider
3. View Provider
4. Validator Provider
5. Ally Provider 

Run `yarn install` to add all those repositories.
__Only use `yarn add` to download repositories__

## Database

The database used is MySql, run 
```js
yarn add mysql
```

## Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

## Server

To run the server and test, run `adonis serve --dev`
