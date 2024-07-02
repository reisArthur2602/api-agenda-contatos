import { FastifyInstance } from 'fastify';
import { UserCreate } from '../interfaces/user.interface';
import { UserUseCase } from '../usecases/user.usecase';

export const UserRoutes = async (fastify: FastifyInstance) => {
  const userUseCase = new UserUseCase();

  fastify.post<{ Body: UserCreate }>('/', async (req, reply) => {
    const { name, email } = req.body;

    if (!name || !email) throw new Error('Preencha os dados corretamente');

    try {
      const data = await userUseCase.create({
        name,
        email,
      });

      return reply.send(data);
    } catch (error) {
      reply.status(400).send('Este email já está cadastrado');
    }
  });

  fastify.get('/', (req, reply) => {
    reply.send({ message: 'ok' });
  });
};
