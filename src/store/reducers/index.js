import { combineReducers } from 'redux'
import currentPage from './currentPage'
import dataUsers from './dataUsers'
import countPages from './countPages'
import paginationPanel from "./paginationPanel";

export default combineReducers({
    currentPage,
    dataUsers,
    countPages,
    paginationPanel
})