import { FastifyInstance } from 'fastify';

export default async function router(fastify: FastifyInstance) {
 fastify.get(
  '/',
  {
   schema: {
    description: 'Powitanie do API',
    tags: ['welcome'],
    response: {
     200: {
      type: 'string',
     },
    },
   },
  },
  async function handler(request, reply) {
   return { hello: 'world' };
  }
 );
}
