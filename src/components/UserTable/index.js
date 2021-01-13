import React from 'react'
import UserRow from '../UserRow'
import UserListControlButton from "../UserListControlButton";
import store from '../../store/store'

import {useDispatch} from 'react-redux';


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
        countPages: 3,
        numberPage: 1,
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

    function nextPage(e) {
        console.log(e.target)

    }

    function checkLessThanThree(req) {
        if (req.numberPage < 4) {
            return (
                <div>
                    <UserListControlButton char={1} handlerName={(e) => nextPage(e)}/>
                    <UserListControlButton char={2} handlerName={(e) => nextPage(e)}/>
                    <UserListControlButton char={3} handlerName={(e) => nextPage(e)}/>
                </div>
            )
        }
    }

    // function SecondAddUser(props, index){
    //     return {
    //         type: 'ADD_USER',
    //         id: index,
    //         text: props.login
    //     }
    // }

    function AddUser() {
        req.elements.map((item, index) => {
            store.dispatch({
                type: 'ADD_USER',
                id: index,
                text: item.login
            })
        })


        // const dispatch = useDispatch();
        //
        // req.elements.map((item, index)=>{
        //     dispatch(SecondAddUser(item, index));
        // })
        //
        // req.elements.map((item, index)=>{
        //     dispatch({
        //         type: 'ADD_USER',
        //         id: index,
        //         text: item.login
        //     });
        // })


        console.log(store.getState());
    }

    return (
        <div className='parent-block'>
            <div className='user-list-control'>

                {checkLessThanThree(req)}
                <UserListControlButton char={1} handlerName={() => AddUser()}/>
            </div>
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
                {userList.map(item =>
                    <UserRow
                        key={item.id}
                        login={item.login}
                        userName={item.userName}
                        tenant={item.tenant}
                        dateCreate={item.dateCreate}
                        action={item.action}
                    />
                )}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;