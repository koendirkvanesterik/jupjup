import { ApolloServer } from 'apollo-server'
import { readFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from './generated/client'
import { Resolvers } from './generated/types'
import { Link, Mutation, Query, User } from './resolvers'
import { getUserId } from './utils/getUserId'

const context = ({ req }: { req: any }) => ({
  ...req,
  prisma: new PrismaClient(),
  userId: req.headers.authorization ? getUserId(req) : null,
})
const resolvers: Resolvers = {
  Link,
  Mutation,
  Query,
  User,
}
const typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf8')

const server = new ApolloServer({
  context,
  resolvers,
  typeDefs,
})

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`))
