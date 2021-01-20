import React from 'react'
import {useSelector} from "react-redux";

// Components
import UserTable from '../components/UserTable'
import NavigationPanel from "../components/NavigationPanel";
import Header from "../components/Header";

// Страница админки.
// TODO: Изменить название страниц на более адекватное.
export function AdminPanel() {

    const navigationPanel = useSelector(state => state.navigationPanel);


    return (
        <div className='admin-page'>
            <NavigationPanel />
            <div
                 className={`admin-page__main-container ${navigationPanel ? 'admin-page__main-container_withpanel' : 'admin-page__main-container_full'}`}
            >
                <Header />
                <UserTable/>
            </div>
        </div>
    )
}

export default AdminPanel;