import { MutationResolvers, QueryResolvers } from '../generated/types'

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

const role: QueryResolvers['getRole'] = async (_parent, args, context) =>
  context.prisma.role.findUnique({
    where: {
      id: args.id,
    },
  })

const roles: QueryResolvers['getRoles'] = async (_parent, _args, context) =>
  context.prisma.role.findMany()

export default {
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
