import fastify, { FastifyInstance } from 'fastify';

const app: FastifyInstance = fastify();

app.listen(
  {
    port: 3000,
  },
  () => console.log('Server running on PORT 3000')
);
