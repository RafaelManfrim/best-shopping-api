import { FastifyReply, FastifyRequest } from 'fastify'
import * as zod from 'zod'

import { prisma } from '../../lib/prisma'

export async function listShoppingLists(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const shoppingLists = await prisma.shoppingList.findMany()
  return reply.status(200).send(shoppingLists)
}

export async function createShoppingList(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = zod.object({})

  const { } = bodySchema.parse(request.body)

  const newShoppingList = await prisma.shoppingList.create({
    data: {},
  })

  return reply.status(200).send(newShoppingList)
}
