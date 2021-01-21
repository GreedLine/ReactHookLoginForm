import React from 'react'
import {useDispatch, useSelector} from 'react-redux';


// Components
import UserRow from '../UserRow'
import Pagination from "../Pagination";

export function UserTable() {

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

     */



    // TODO: Вынести всё это удовольствие в один большой-большой псевдокомпонент.
    function updateStore(item, type){
        switch (type) {
            case 'SET_DATA_USERS':
                let users = item
                return{
                    type: type,
                    users
                }
            default:
                throw new Error('Error on dispatch function in store. Type dispatch: ' + type);
        }
    }

    const dataUsers = useSelector(state => state.dataUsers);
    const dispatch = useDispatch();

    //TODO: Переписать на AJAX. Промисы это, конечно, весело, но не здесь. Или здесь.
    //TODO: Уточнить у Дениса касательно промисов и их политической позиции касательно рендера.
    if(dataUsers.length === 0){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(updateStore(json, 'SET_DATA_USERS')))
    }

    return (
        <div className='admin-table-container'>
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

                <Pagination testCurrentPage={req.currentPage}
                            countPages={req.countPages}
                />
            </div>
        </div>
    )
}

export default UserTable;