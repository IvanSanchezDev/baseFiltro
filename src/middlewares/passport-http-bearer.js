import passport from 'passport'
import { Strategy as BearerStrategy } from 'passport-http-bearer'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

passport.use(new BearerStrategy((token, done) => {
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    return done(null, user)
  } catch (error) {
    return done(null, false)
  }
}))

export default passport
