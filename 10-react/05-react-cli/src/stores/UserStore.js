import {EventEmitter} from "events";
import dispatcher from './../dispatcher'
// UserStore.on('change', ()=>{console.log('do something here')})

class UserStore extends EventEmitter{

    constructor(){
        super();
        this.users = [
            {name: 'admin', password: 'admin', role:'admin'},
            {name: 'user1', password: 'user', role:'user'},
            {name: 'user2', password: 'user', role:'user'}
        ]
    }

    getAllUsers = ()=>{
        return this.users;
    }

    createUser = (user)=>{
        // this.users = [...this.users, user]
        this.users.push(user);
        this.emit('change');
    }

    handleAction =(action)=>{
        console.log("Action is ", action);
        switch(action.type){
            case 'CREATE_USER':
                this.createUser(action.user);
        }
    }
}

const userStore = new UserStore;
// window.userStore = userStore;
dispatcher.register(userStore.handleAction)
// window.dispatcher = dispatcher;

export default userStore;