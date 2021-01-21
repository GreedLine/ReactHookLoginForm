import React from 'react';

export function UserRow ({login, userName, tenant, dateCreate, action}){
    // TODO: Переписать ключи на те, что будут приходить. Кнш, как только будет API.
    return(
        <tr className='user-list__tr'>
            <td className='user-list__td'>{login}</td>
            <td className='user-list__td'>{userName}</td>
            <td className='user-list__td'>{tenant}</td>
            <td className='user-list__td'>{dateCreate}</td>
            <td className='user-list__td'>{action}</td>
        </tr>
    )
}

export default UserRow;