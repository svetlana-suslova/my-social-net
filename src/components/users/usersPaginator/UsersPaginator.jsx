import React, {useState} from 'react';
import styled from 'styled-components';
import classNames from "classnames";
import s from './UsersPaginator.module.sass';

const UsersPaginator = ( {totalUsersCount, pageSize, currentPage, onPageChanged, portionSize} ) => {

    const Paginator = styled.div`
        display: flex;
        flex-direction: column;
        box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);
        position: absolute;
        width: 240px;
        height: 100%;
        top: 0px;
        padding: 50px 30px;
        margin-left: -240px;
        background: #ffffff;
    `;
    const Control = styled.button`
      display: block;
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #fff;
      background-color: #4F5467;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
      margin: 5px 0;
      &:hover {
        border: 1px solid #4F5467;
        color: #4F5467;
        background: #edf1f5;
      }
      &:focus {
        outline: none;
      }   
    `;
    
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
        <Paginator>
            {
                portionNumber > 1 &&
                <Control onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</Control> 
                
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
                <Control onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</Control> 
                
            }
        </Paginator>
    );
}
export default UsersPaginator;