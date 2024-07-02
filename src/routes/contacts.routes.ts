import { FastifyInstance } from 'fastify';
import { ContactsCreate } from '../interfaces/contacts.interface';
import { ContactsUseCase } from '../usecases/contacts.usecase';

export const ContactsRoutes = async (fastify: FastifyInstance) => {
  const contactsUseCase = new ContactsUseCase();

  fastify.post<{ Body: Omit<ContactsCreate, 'userId'> }>(
    '/',
    async (req, reply) => {
      const { email, name, phone } = req.body;

      if (!email || !name || !phone)
        throw new Error('Preencha os dados corretamente');

      try {
     
      } catch (error) {
        reply.status(400).send('Este email/telefone já está cadastrado');
      }
    }
  );

  fastify.get('/', (req, reply) => {
    reply.send({ message: 'ok' });
  });
};
