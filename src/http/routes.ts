import { FastifyInstance } from 'fastify'
import { createUser, authenticateUser, listUsers } from './controllers/users'

export async function appRoutes(app: FastifyInstance) {
  app.get('/users', listUsers)
  app.post('/users', createUser)
  app.post('/users/login', authenticateUser)
}
