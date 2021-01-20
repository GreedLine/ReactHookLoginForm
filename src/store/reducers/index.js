import { combineReducers } from 'redux'
import currentPage from './currentPage'
import dataUsers from './dataUsers'
import countPages from './countPages'
import paginationPanel from "./paginationPanel";
import navigationPanel from "./navigationPanel";

export default combineReducers({
    currentPage,
    dataUsers,
    countPages,
    paginationPanel,
    navigationPanel
    })