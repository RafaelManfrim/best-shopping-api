import { FastifyReply, FastifyRequest } from 'fastify'
import * as zod from 'zod'

import { prisma } from '../../lib/prisma'

export async function listPlaces(request: FastifyRequest, reply: FastifyReply) {
  const places = await prisma.place.findMany()

  return reply.status(200).send(places)
}
