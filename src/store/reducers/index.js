import { combineReducers } from 'redux'
import dataUsers from './dataUsers'
import navigationPanel from "./navigationPanel";

export default combineReducers({
    dataUsers,
    navigationPanel
    })