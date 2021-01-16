import React from 'react'
import UserTable from '../components/UserTable'
import store from '../store/store'
import {Provider} from "react-redux";

// Тестовая страница для вывода таблицы.
export function AdminPanel(){
    return(
            <Provider store={store}>
        <UserTable />
            </Provider>
    )
}

export default AdminPanel;