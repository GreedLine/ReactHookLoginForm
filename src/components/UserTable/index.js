import React from 'react'
import UserRow from '../UserRow'

export function UserTable() {
    const userList = [
        {id:1, login: 'greedline', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id:2, login: 'progressiveart', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
        {id:3, login: 'alion', userName: '-', tenant: '-', dateCreate: '-', action: "-"},
    ]
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