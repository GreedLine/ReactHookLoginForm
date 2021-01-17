import { combineReducers } from 'redux'
import currentPage from './currentPage'
import dataUsers from './dataUsers'
import countPages from './countPages'
import paginationPanel from "./paginationPanel";

// TODO: Уточнить информацию касательно объединения данных используемых только для этой страницы.

export default combineReducers({
    currentPage,
    dataUsers,
    countPages,
    paginationPanel
})