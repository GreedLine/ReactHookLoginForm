import React from 'react'
import UserRow from '../UserRow'
import store from '../../store/store'
import Pagination from "../Pagination";
import {useDispatch, useSelector} from 'react-redux';

export function UserTable() {
    const userList = [
        {id: 1, login: 'greedline', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id: 2, login: 'progressiveart', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id: 3, login: 'alion', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id: 4, login: 'JayDay', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id: 5, login: 'Impostor', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id: 6, login: 'Red', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id: 7, login: 'Green', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id: 8, login: 'Blue', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id: 9, login: 'Purple', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id: 10, login: 'Ukulka', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id: 11, login: 'Cvet', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
    ]
    const req = {
        countItems: 11,
        countPages: 15,
        currentPage: 6,
        elements: [
            {id: 1, login: 'greedline', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
            {id: 2, login: 'progressiveart', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
            {id: 3, login: 'alion', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
            {id: 4, login: 'JayDay', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
            {id: 5, login: 'Impostor', userName: '-', tenant: '-', dateCreate: '-', action: "-"}]
    }


    /* GET запрос к серверу с параметром в виде
      url: 'http://api.site.ru/admin/user?numPage='+number+'&countItem='number
    Что я хочу увидеть:

    json object {
    кол-во итемов: number(73),
    номер странцы: number(1-10),
    кол-во страниц: number(1-10),
    элементы: [
    {id: 1, login: 'greedline', ...},
    {id: 2, login: 'greedline', ...}
    ]
    }

    Навигация работает так:
    Мне вернулась страница 7.
    Надо отобразить  <<, <, 7-2, 7-1, 7, 7+1, 7+2 и если есть больше, то, >, >>

     */


    function setDataUsers(users){
        console.log(store.getState())
        return {
            type: 'SET_DATA_USERS',
            users
        };
    }

    function setCurrentPage(currentPage){
        return {
            type: 'SET_CURRENT_PAGE',
            currentPage
        };
    }

    function setCountPage(countPages){
        return {
            type: 'SET_COUNT_PAGES',
            countPages
        };
    }

    function imitationResponse(){
        // Текущие данные на странице
        dispatch(setDataUsers(req.elements))
        // Кол-во страниц
        dispatch(setCountPage(req.countPages))
        // Текущая страница
        dispatch(setCurrentPage(req.currentPage))
    }

    const dataUsers = useSelector(state => state.dataUsers);
    const dispatch = useDispatch();


    return (
        <div className='parent-block'>

            <table className='user-list'>
                <thead className='user-list__thead'>
                <tr className='user-list__head'>
                    <th className='user-list__th' scope='col'>Login</th>
                    <th className='user-list__th' scope='col'>UserName</th>
                    <th className='user-list__th' scope='col'>Tenant</th>
                    <th className='user-list__th' scope='col'>DateCreate</th>
                    <th className='user-list__th' scope='col'>Action</th>
                </tr>
                </thead>
                <tbody className='user-list__tbody'>
                {dataUsers.map(item =>
                    <UserRow key={item.id}
                             login={item.login}
                             userName={item.userName}
                             tenant={item.tenant}
                             dateCreate={item.dateCreate}
                             action={item.action} />
                )}
                </tbody>
            </table>
            <div className='user-list-control'>

                <Pagination />

                <button onClick={() => imitationResponse()}>Занести данные</button>
            </div>
        </div>
    )
}

export default UserTable;