import { MutationResolvers, QueryResolvers } from '../generated/types'

/**
 * Mutations
 */

const createRole: MutationResolvers['createRole'] = async (
  _parent,
  args,
  context,
) => await context.prisma.role.create({ data: args })

const deleteRole: MutationResolvers['deleteRole'] = async (
  _parent,
  args,
  context,
) =>
  await context.prisma.role.delete({
    where: {
      id: args.id,
    },
  })

const updateRole: MutationResolvers['updateRole'] = async (
  _parent,
  args,
  context,
) =>
  await context.prisma.role.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
    },
  })

/**
 * Queries
 */

const role: QueryResolvers['role'] = async (_parent, args, context) =>
  context.prisma.role.findUnique({
    where: {
      id: args.id,
    },
  })

const roles: QueryResolvers['roles'] = async (_parent, _args, context) =>
  context.prisma.role.findMany()

/**
 * Resolvers object
 */

const resolvers = {
  Mutation: {
    createRole,
    deleteRole,
    updateRole,
  },
  Query: {
    role,
    roles,
  },
}

export default resolvers
