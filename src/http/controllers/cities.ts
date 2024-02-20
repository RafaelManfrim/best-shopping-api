import { FastifyReply, FastifyRequest } from 'fastify'
import * as zod from 'zod'

import { prisma } from '../../lib/prisma'

export async function listCities(request: FastifyRequest, reply: FastifyReply) {
  const cities = await prisma.city.findMany()

  return reply.status(200).send(cities)
}
