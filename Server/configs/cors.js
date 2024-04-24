import SERVER_CONFIG from './config.js'
export const corsOptions = {
  origin: SERVER_CONFIG.SERVER_ORIGIN,
  credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
}
