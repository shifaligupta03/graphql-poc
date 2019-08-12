import { makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers'

const typeDefs = `
type HackerNewsItem {
    id: String
    text: String
    timeISO: String
    time: Int
    deleted: Boolean
}

type User{
    id: ID
    firstName: String!
    lastName: String!
    email: String
    gender: Gender
    items: [HackerNewsItem]
}
type Query {
   item: HackerNewsItem
   getUser(id:ID): User
   users:[User]
}
enum Gender{
    MALE,
    FEMALE
    OTHER
}
input UserInput{
    id: ID
    firstName: String!
    lastName: String!
    email: String
    gender: Gender
    items: [HackerNewsItemInput]
}
input HackerNewsItemInput {
    id: String
    text: String
    timeISO: String
    time: Int
    deleted: Boolean
}
type Mutation{
    createUser(input: UserInput) : User
}
`;


const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;