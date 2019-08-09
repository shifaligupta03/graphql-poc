// resolver
const users=[];
let user={};
export const resolvers = {
    Query:{
        item: ()=> {
            return {
             id:'123123',
             text: 'Item text'
            }
         },
         getUser: ({id})=>{
             return users.find(user=> user.id === id)
         },
         users:()=>{
             return users;
         }
    },
    Mutation:{
        createUser:({input})=>{
            user=input;
            users.push(user);
            return user;
        }
    }
    ,
   
};
