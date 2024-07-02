import { FastifyRequest } from 'fastify';
import { UserId } from './types';

type UserId = string;

declare module 'fastify' {
  interface FastifyRequest {
    userId?: UserId;
  }
}
