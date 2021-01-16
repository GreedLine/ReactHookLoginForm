import {createStore} from 'redux';
import {act} from "@testing-library/react";


function userReducer(state, action) {
    switch (action.type) {
        case 'SET_DATA_USERS':
            return {
                users: action.users,
                currentPage: state.currentPage,
                countPages: state.countPages,
                paginationPanel: [...state.paginationPanel]
            }
        case 'SET_CURRENT_PAGE':
            return {
                currentPage: action.currentPage,
                users: [...state.users],
                countPages: state.countPages,
                paginationPanel: [...state.paginationPanel]
            }
        case 'SET_COUNT_PAGE':
            return {
                countPages: action.countPages,
                currentPage: state.currentPage,
                paginationPanel: [...state.paginationPanel],
                users: [...state.users],
            }
        case 'SET_PAGINATION_PANEL':
            return {
                paginationPanel: action.paginationPanel,
                countPages: state.countPages,
                currentPage: state.currentPage,
                users: [...state.users],
            }
        default:
            return state
    }
}

const initialStore = {users: [],currentPage:[], countPage:[], paginationPanel:[]};

const store = createStore(userReducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;