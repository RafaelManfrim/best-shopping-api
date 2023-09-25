import dotenv from 'dotenv'
import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

dotenv.config()

const prisma = new PrismaClient()

const fastify = Fastify({
  logger: true,
})

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
