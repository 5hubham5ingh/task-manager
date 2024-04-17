
export const corsOptions = {
  origin: process.env.SERVER_ORIGIN || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
}