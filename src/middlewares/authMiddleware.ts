import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export const authMiddleware = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const userId = req.headers['userid'];
  if (!userId)
    return reply.status(401).send({ message: 'Usuário não está autenticado' });
  req.userId = userId as string;
};
