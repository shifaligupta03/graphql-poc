// resolver
const users=[];
let user={};
const resolvers = {
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
    },
    createUser:({input})=>{
        user=input;
        users.push(user);
        return user;
    }
};

export default resolvers;