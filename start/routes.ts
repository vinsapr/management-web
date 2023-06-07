/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.on('/').render('welcome')
Route.on('register').render('register')
Route.post('register', 'AuthController.register')

Route.on('login').render('login')
Route.post('/login', 'AuthController.login')

Route.group(() => {
  Route.get('/dashboard', 'EmployeesController.index').as('dashboard')
  Route.get('employee/:id', 'EmployeesController.show')
  Route.put('employee/:id', 'EmployeesController.update')
  Route.post('employee', 'EmployeesController.store')
  Route.delete('employee/:id', 'EmployeesController.destroy')
  Route.resource('employees', 'EmployeesController')
}).middleware('auth')
