import React from 'react';

export const UserListControlButton = React.forwardRef(({char, handlerName}, ref) =>{

    return (
        <button className='user-list-control__button' ref={ref} onClick={handlerName} value={char}>{char}</button>
    )
});

export default UserListControlButton;