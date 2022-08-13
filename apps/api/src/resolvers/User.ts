import { UserResolvers } from '../generated/types'

const links: UserResolvers['links'] = (parent, _args, context) =>
  context.prisma.user.findUnique({ where: { id: parent.id } }).links()

export const User = {
  links,
}
