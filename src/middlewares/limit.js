import rateLimit from 'express-rate-limit'
export const limitUsuario = () => {
  return rateLimit({
    windowMs: 30 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: (req, res) => {
      res.status(429).send({
        message: 'Limite de solicitudes alcanzado'
      })
    }
  })
}
