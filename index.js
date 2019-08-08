import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from'./schema';
import resolvers from './resolvers';

const app = express();


app.get('/',(req, res)=>{
    res.json({
        msg:"graphql"
    });
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.listen(3000, ()=>{
    console.log('App is running on PORT 3000');
})