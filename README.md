# Magenta
### AdonisJS application 

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.	This framework comes with pre-installed: 

1. Bodyparser	
2. Session	
3. Authentication	
4. Web security middleware	
5. CORS	
6. Edge template engine	
7. Lucid ORM	
8. Migrations and seeds	

## Setup	
You need to install: 

```bash	
Run `yarn install` to add all those repositories.
```	
__Only use `yarn add` to download repositories__

## Database

The database used is MySql, run 
```js
yarn add mysql
```

## Migrations	

Run the following command to run startup migrations.	

```js
adonis migration:run	adonis migration:run
```

## Server

To run the server and test, run `adonis serve --dev`
