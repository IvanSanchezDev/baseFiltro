import jwt from 'jsonwebtoken'

export const generateAccesToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '3h' })
}
