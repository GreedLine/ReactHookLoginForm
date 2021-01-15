import {createStore} from 'redux';


function userReducer(state, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {
                users: action.users,
                another: [...state.another]
            }
        default:
            return state
    }
}

const initialStore = {users: [], another: []};

const store = createStore(userReducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;