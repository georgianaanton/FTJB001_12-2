import dispatcher from './../dispatcher';

export function createUser(user){
    dispatcher.dispatch({
        type: 'CREATE_USER',
        // user:user
        user
    })
};
export function deleteUser(name){};
export function updateUser(name, user){};
export function findUser(name){};

