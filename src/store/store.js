import {createStore} from 'redux';
import {TAKE_USER, PUT_USER} from './reducers/user'


function userReducer(state, action) {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    user: {
                        id: action.id,
                        text: action.text
                    }
                }
            ]
        default:
            return state
    }
}

const initialTodos = []

const store = createStore(userReducer, initialTodos, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// Использование
// store.dispatch({
//     type: 'ADD_USER',
//     id: 1,
//     text: 'Понять насколько redux прост'
// })


export default store;