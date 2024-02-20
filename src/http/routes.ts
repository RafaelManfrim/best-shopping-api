import { FastifyInstance } from 'fastify'
import { createUser, authenticateUser, listUsers } from './controllers/users'
import {
  createShoppingList,
  listShoppingLists,
} from './controllers/shopping-lists'
import { createPurchase, listPurchases } from './controllers/purchases'
import { listCities } from './controllers/cities'
import { listPlaces } from './controllers/places'

export async function appRoutes(app: FastifyInstance) {
  app.get('/users', listUsers)
  app.post('/users', createUser)
  app.post('/users/login', authenticateUser)

  app.get('/cities', listCities)
  // app.post('/cities', createCity)
  // app.patch('/cities/:id', updateCity)
  // app.delete('/cities/:id', deleteCity)

  app.get('/places', listPlaces)
  // app.post('/places', createPlace)
  // app.patch('/places/:id', updatePlace)
  // app.delete('/places/:id', deletePlace)

  app.get('/shopping-list', listShoppingLists)
  app.post('/shopping-list', createShoppingList)
  // app.patch('/shopping-list/:id', updateShoppingList)
  // app.delete('/shopping-list/:id', deleteShoppingList)

  app.get('/purchase', listPurchases)
  app.post('/purchase', createPurchase)
  // app.patch('/purchase/:id', updatePurchase)
  // app.delete('/purchase/:id', deletePurchase)
}
