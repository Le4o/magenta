# Magenta
### AdonisJS application 


This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.	This framework comes with pre-installed: 


1. Bodyparser	1. Bodyparser
2. Session	2. Authentication
3. Authentication	3. CORS
4. Web security middleware	4. Lucid ORM
5. CORS	5. Migrations and seeds
6. Edge template engine	
7. Lucid ORM	
8. Migrations and seeds	


## Setup	You need to install: 


Use the adonis command to install the blueprint	1. Vow Provider
3. View Provider
4. Validator Provider
5. Ally Provider 


```bash	Run `yarn install` to add all those repositories.
adonis new yardstick	__Only use `yarn add` to download repositories__
```	


or manually clone the repo and then run `npm install`.	## Database


The database used is MySql, run 
```js
yarn add mysql
```


### Migrations	## Migrations


Run the following command to run startup migrations.	Run the following command to run startup migrations.


```js	```js
adonis migration:run	adonis migration:run
```	```

## Server

To run the server and test, run `adonis serve --dev`
