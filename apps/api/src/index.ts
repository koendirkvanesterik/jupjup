import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { ApolloServer } from 'apollo-server'
import { join } from 'path'
import { PrismaClient } from './generated/client'
import { getUserId } from './utils/getUserId'

const context = ({ req }: { req: any }) => ({
  ...req,
  prisma: new PrismaClient(),
  userId: req.headers.authorization ? getUserId(req) : null,
})
const resolvers = loadFilesSync(join(__dirname, './resolvers'))
const typeDefs = loadFilesSync(join(__dirname, './schema'))

const server = new ApolloServer({
  context,
  resolvers: mergeResolvers(resolvers),
  typeDefs: mergeTypeDefs(typeDefs),
})

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`))
