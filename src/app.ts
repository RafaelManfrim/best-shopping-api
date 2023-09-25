import Fastify from 'fastify'

import { env } from './env'
import { appRoutes } from './http/routes'

const app = Fastify({
  logger: true,
})

app.register(appRoutes)

app.setErrorHandler((error, _, reply) => {
  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})

export { app }
