import {createStore} from 'redux';
import reducer from './reducers/index'

const initialStore = {dataUsers: [],currentPage:[], countPages:[], paginationPanel:[]};

const store = createStore(reducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
