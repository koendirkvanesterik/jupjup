import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { MutationResolvers } from '../generated/types'
import { APP_SECRET } from '../utils/getUserId'

const login: MutationResolvers['login'] = async (_parent, args, context) => {
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

const post: MutationResolvers['post'] = async (_parent, args, context) => {
  const { userId } = context

  return await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userId } },
    },
  })
}

const signup: MutationResolvers['signup'] = async (_parent, args, context) => {
  const password = await hash(args.password, 10)
  const user = await context.prisma.user.create({ data: { ...args, password } })
  const token = sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

export const Mutation: MutationResolvers = {
  login,
  post,
  signup,
}
