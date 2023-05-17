import Hash from '@ioc:Adonis/Core/Hash'
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

Route.get('/', 'HomeController.index')
Route.get('/about', async ({ inertia }) => inertia.render('About'))

// Route.get('/create',async ({}) => {
//   await prisma.user.createMany({
//     data: [
//       { name: 'Bob', email: 'bosb@prisma.io', password:'12345678' },
//       { name: 'Bobo', email: 'bobs@prisma.io', password:'12345678' },
//       { name: 'Yewande', email: 'yewande@prisma.io', password:'12345678' },
//       { name: 'Angelique', email: 'angelique@prisma.io', password:'12345678' },
//     ],
//   })
// })
