import fastify, { FastifyInstance } from 'fastify';
import { UserRoutes } from './routes/user.route';

const app: FastifyInstance = fastify();

app.register(UserRoutes, { prefix: '/user' });

app.listen(
  {
    port: 3000,
  },
  () => console.log('Server running on PORT 3000')
);
