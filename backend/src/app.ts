import fastify from 'fastify';
import router from './router';
import cors from '@fastify/cors';

const server = fastify({
 // Logger only for production
 logger: !!(process.env.NODE_ENV !== 'development'),
});

// Register CORS
server.register(cors, {
 origin: true, // Allows all origins
 methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'], // Allowed methods
 credentials: true, // Allows credentials
});

// Middleware: Router
server.register(router);

export default server;
