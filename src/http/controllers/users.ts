import { FastifyReply, FastifyRequest } from 'fastify'
import * as zod from 'zod'

import { prisma } from '../../lib/prisma'

export async function authenticateUser(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
  })

  const { email, password } = bodySchema.parse(request.body)

  const user = await prisma.user.findUnique({
    where: {
      email,
      password,
    },
  })

  if (!user) {
    return reply.status(401).send({
      message: 'Credenciais inválidas',
    })
  }

  return reply.status(200).send(user)
}

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6),
  })

  const { name, email, password } = bodySchema.parse(request.body)

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  })

  return reply.status(200).send(newUser)
}

export async function listUsers(request: FastifyRequest, reply: FastifyReply) {
  const users = await prisma.user.findMany()

  return reply.status(200).send(users)
}
