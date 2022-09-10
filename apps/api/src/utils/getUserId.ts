import { verify } from 'jsonwebtoken'
import { APP_SECRET } from '../config'

export const getUserId = (authorization: string): string => {
  const token = authorization.replace('Bearer ', '')

  if (!token) {
    throw new Error('No token found')
  }

  const decodedToken = verify(token, APP_SECRET)
  const payload = typeof decodedToken === 'object' ? decodedToken : {}

  return payload.userId
}
