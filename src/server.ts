import fastify, { FastifyInstance } from 'fastify';
import { UserRoutes } from './routes/user.routes';
import { ContactsRoutes } from './routes/contacts.routes';

const app: FastifyInstance = fastify();

app.register(UserRoutes, { prefix: '/user' });
app.register(ContactsRoutes, { prefix: '/contacts' });

app.listen(
  {
    port: 3000,
  },
  () => console.log('Server running on PORT 3000')
);
