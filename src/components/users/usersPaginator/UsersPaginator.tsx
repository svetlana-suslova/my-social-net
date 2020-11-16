import React, {useState} from 'react';
import classNames from 'classnames';
import s from './UsersPaginator.module.sass';
import { PaginatorControl } from '../../common/buttons/Buttons';
import LeftPanel from '../../common/blocks/LeftPanel';

type props = {
    totalUsersCount: number 
    pageSize: number 
    currentPage: number 
    onPageChanged: (p: number) => void 
    portionSize: number
}

const UsersPaginator: React.FC<props> = ( {totalUsersCount, pageSize, currentPage, onPageChanged, portionSize} ) => {
    
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <LeftPanel>
            {
                portionNumber > 1 &&
                <PaginatorControl onClick={() => { setPortionNumber(portionNumber - 1) }} text="PREV" /> 
                
            }
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <button className={ classNames({[s.selectedPage] : currentPage === p}, s.pageNumber) }
                            key={p} 
                            onClick={ () => { onPageChanged(p) } }>{p}</button> })
            }
            {
                portionCount > portionNumber &&
                <PaginatorControl onClick={() => { setPortionNumber(portionNumber + 1) }} text="NEXT" />
                
            }
        </LeftPanel>
    );
}
export default UsersPaginator;