import { LinkResolvers } from '../generated/types'

const postedBy: LinkResolvers['postedBy'] = (parent, _args, context) =>
  context.prisma.link.findUnique({ where: { id: parent.id } }).postedBy()

export const Link: LinkResolvers = {
  postedBy,
}
