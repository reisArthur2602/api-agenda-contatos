import { FastifyInstance } from 'fastify';
import { authMiddleware } from '../middlewares/authMiddleware';
import { Contacts, ContactsCreate } from '../interfaces/contacts.interface';
import { ContactsUseCase } from '../usecases/contacts.usecase';

export const ContactsRoutes = async (fastify: FastifyInstance) => {
  const contactsUseCase = new ContactsUseCase();
  fastify.addHook('preHandler', authMiddleware);

  fastify.post<{ Body: Omit<ContactsCreate, 'userId'> }>(
    '/',
    async (req, reply) => {
      const { email, name, phone } = req.body;
      const phoneRegex =
        /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/;

      if (!email || !name || !phoneRegex.test(phone))
        throw new Error('Preencha os dados corretamente');

      const userId = req.userId as string;

      try {
        const data = await contactsUseCase.create({
          email,
          name,
          phone,
          userId,
        });
        return reply.send(data);
      } catch (error) {
        reply.status(400).send('Este email/telefone já está cadastrado');
      }
    }
  );

  fastify.put<{
    Body: Partial<Omit<Contacts, 'userId'>>;
    Params: { id: string };
  }>('/:id', async (req, reply) => {
    const { email, name, phone } = req.body;

    const { id } = req.params;
    if (!id) throw new Error('Envie o Id do contato que deseja atualizar ');

    if (phone) {
      const phoneRegex =
        /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/;

      if (!phoneRegex.test(phone))
        throw new Error('Número de telefone inválido');
    }

    try {
      const data = await contactsUseCase.update({
        id,
        email,
        name,
        phone,
      });
      return reply.send(data);
    } catch (error) {
      reply.status(404).send('O contato não foi encontrado');
    }
  });

  fastify.delete<{
    Params: { id: string };
  }>('/:id', async (req, reply) => {
    const { id } = req.params;

    if (!id) throw new Error('Envie o Id do contato que deseja deletar');

    try {
      const data = await contactsUseCase.delete({
        id,
      });

      return reply.send(data);
    } catch (error) {
      reply.status(404).send('O contato não foi encontrado');
    }
  });

  fastify.get('/', async (req, reply) => {
    
    const userId = req.userId;
    try {
      const data = await contactsUseCase.getAll({ userId });

      return reply.send(data);
    } catch (error) {
      reply.status(500).send('Falha ao buscar tarefas');
    }
  });
};
