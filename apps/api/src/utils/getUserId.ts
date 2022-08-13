import { verify } from 'jsonwebtoken'

export const APP_SECRET = '71d9fc91f10c4503a35d98930e67be4b'

export const getUserId = (req: any, authToken?: string) => {
  if (req) {
    const authHeader = req.headers.authorization

    if (authHeader) {
      const token = authHeader.replace('Bearer ', '')

      if (!token) {
        throw new Error('No token found')
      }

      return getTokenPayload(token).userId
    }
  } else if (authToken) {
    return getTokenPayload(authToken).userId
  }

  throw new Error('Not authenticated')
}

const getTokenPayload = (token: string) => {
  const payload = verify(token, APP_SECRET)

  return typeof payload === 'object' ? payload : {}
}
