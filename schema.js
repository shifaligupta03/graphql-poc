import { makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers'

const typeDefs = `
type HackerNewsItem {
    id: String
    text: String
    title: String
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
   getItem(id:ID!): HackerNewsItem
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
    items: [ID!]
}
input HackerNewsItemInput {
    id: String
    text: String
    title: String
    timeISO: String
    time: Int
    deleted: Boolean
}
type Mutation{
    createUser(input: UserInput) : User
    updateUser(input: UserInput) : User
    deleteUser(id: ID) : User
    createItem(input: HackerNewsItemInput): HackerNewsItem
}
`;


const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;