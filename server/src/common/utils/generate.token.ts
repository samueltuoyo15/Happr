import { JwtService } from '@nestjs/jwt'

const jwtService = new JwtService()

export function generateAccessToken(_id: string, email: string) {
  const payload = { _id, email }
  const token = jwtService.sign(payload, {
    secret: process.env.JWT_SECRET,
    expiresIn: '30m',
  })
  return { access_token: token }
}

export function generateRefreshToken(_id: string, email: string) {
  const payload = { _id, email }
  const token = jwtService.sign(payload, {
    secret: process.env.JWT_SECRET,
    expiresIn: '7d',
  })
  return { refresh_token: token }
}

export function generateMailToken(_id: string, username: string, email: string) {
  const payload = { _id, username, email }
  const token = jwtService.sign(payload, {
    secret: process.env.JWT_SECRET,
    expiresIn: '1d',
  })
  return { email_token: token }
}
