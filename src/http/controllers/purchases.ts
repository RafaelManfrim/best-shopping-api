import { FastifyReply, FastifyRequest } from 'fastify'
import * as zod from 'zod'

import { prisma } from '../../lib/prisma'

export async function listPurchases(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const purchases = await prisma.purchase.findMany()
  return reply.status(200).send(purchases)
}

export async function createPurchase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = zod.object({})

  const { } = bodySchema.parse(request.body)

  const newPurchase = await prisma.purchase.create({
    data: {},
  })

  return reply.status(200).send(newPurchase)
}
