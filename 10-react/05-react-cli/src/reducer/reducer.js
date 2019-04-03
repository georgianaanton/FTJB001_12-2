
const initState = {
    users: [
        {name: 'admin', password: 'admin', role:'admin'},
        {name: 'user', password: 'user', role:'user'},
        {name: 'some user', password: '1234', role:'user'}
    ],
    books: [],
    payments: []
}

const appReducer = (state=initState, action)=>{
    console.log(action);
    if(action.type === "ADD_USER"){
        return {
            ...state,
            users: [...state.users, action.payload]
        }
    }
    else if(action.type === "DELETE"){}
    return state;
}

export default appReducer;