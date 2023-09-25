import dotenv from 'dotenv'
import Fastify from 'fastify'
// import { Pool } from 'pg'

dotenv.config()

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || '5432'),
// })

// const connectToDB = async () => {
//   try {
//     await pool.connect()
//   } catch (err) {
//     console.log(err)
//   }
// }

// connectToDB()

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
