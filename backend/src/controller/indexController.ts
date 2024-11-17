import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export default async function indexController(fastify: FastifyInstance) {
 fastify.get(
  '/',
  async function (_request: FastifyRequest, reply: FastifyReply) {
   const response = { message: 'Witam z serwera!' };

   reply
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(response);
  }
 );
}
