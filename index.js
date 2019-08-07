import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from'./schema';

const app = express();

// resolver
const users=[];
let user={};
const root = {
    item: ()=> {
       return {
        id:'123123',
        text: 'Item text'
       }
    },
    user: ()=>{
        return {
            firstName:'Jane',
            lastName:'Doe',
            emails:[
                {
                    email:'jane@gmail.com'
                },
                {
                    email:'jane@yahoo.com'
                }
            ]
        }
    },
    users:()=>{
        return users;
    },
    createUser:({input})=>{
        user=input;
        users.push(user);
        return user;
    }
};

app.get('/',(req, res)=>{
    res.json({
        msg:"graphql"
    });
});

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.listen(3000, ()=>{
    console.log('App is running on PORT 3000');
})