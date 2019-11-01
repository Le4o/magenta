'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.on('/register_page').render('register')
Route.on('/dashboard').render('dashboard')

Route.get('users/:id', 'UserController.show').middleware('auth')
Route.get('logout', 'UserController.logout').middleware('auth')
Route.post('login', 'UserController.login')


Route.post('register', 'RegisterController.store')
