import { QueryResolvers } from '../generated/types'

const feed: QueryResolvers['feed'] = async (_parent, args, context) => {
  const where = args.filter
    ? {
        OR: [
          {
            description: {
              contains: args.filter,
            },
          },
          {
            url: {
              contains: args.filter,
            },
          },
        ],
      }
    : {}

  const links = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
  })

  return links
}

export const Query: QueryResolvers = {
  feed,
}
