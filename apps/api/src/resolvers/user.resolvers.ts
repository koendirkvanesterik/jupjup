import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { APP_SECRET } from '../config'
import { MutationResolvers } from '../generated/types'

/**
 * Mutations
 */

const createUser: MutationResolvers['createUser'] = async (
  _parent,
  args,
  context,
) => {
  const password = await hash(args.password, 10)
  const user = await context.prisma.user.create({ data: { ...args, password } })
  const token = sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

const loginUser: MutationResolvers['loginUser'] = async (
  _parent,
  args,
  context,
) => {
  const user = await context.prisma.user.findUnique({
    where: { email: args.email },
  })

  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await compare(args.password, user.password)

  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

/**
 * Resolvers object
 */
const resolvers = {
  Mutation: {
    createUser,
    loginUser,
  },
}

export default resolvers
