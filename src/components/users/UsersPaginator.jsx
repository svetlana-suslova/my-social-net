import React, {useState} from 'react';
import s from './Users.module.sass';
import classNames from "classnames";

const UsersPaginator = ( {totalUsersCount, pageSize, currentPage, onPageChanged, portionSize} ) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            {
                portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> 
                
            }
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={ classNames({[s.selectedPage] : currentPage === p}, s.pageNumber) }
                            key={p} 
                            onClick={ () => { onPageChanged(p) } }>{p}</span> })
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> 
                
            }
        </div>
    );
}
export default UsersPaginator;