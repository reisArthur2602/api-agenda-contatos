import { FastifyRequest, FastifyReply } from 'fastify';
import { UserRepositoryPrisma } from '../repositories/user.repositories';

const userRepository = new UserRepositoryPrisma();

export const authMiddleware = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const userId = req.headers['userid'] as string;
  
  if (!userId)
    return reply.status(401).send({ message: 'Usuário não está autenticado' });

  const user = await userRepository.findById({ id: userId });

  if (!user)
    return reply.status(401).send({ message: 'Usuário não está autenticado' });


  req.userId = userId;
};
