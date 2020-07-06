import React from 'react';
import s from './Users.module.sass';

const UsersPaginator = ( {totalUsersCount, pageSize, currentPage, onPageChanged} ) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            { pages.map(p => {
                return <span className={currentPage === p && s.selectedPage} 
                onClick={ () => { onPageChanged(p) } }>{p}</span>
            }) }
        </div>
    );
}
export default UsersPaginator;