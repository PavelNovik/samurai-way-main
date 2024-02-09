import React, {useState} from 'react';
import s from "./Paginator.module.css";
import cn from 'classnames'

type Props = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (page: number) => void
    currentPage: number
}
export const Paginator = (props: Props) => {
    const portionSize = 20
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginationContainer}>
            <button disabled={portionNumber===1} onClick={()=> setPortionNumber(portionNumber-1)}>Prev</button>
            <div className={s.pages}>
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {

                    return <span key={p} onClick={() => props.onPageChanged(p)}
                                 // className={props.currentPage === p ? s.selectPage + ' ' + s.selectedPage : s.selectPage}
                                 className={cn({[s.selectPage]: props.currentPage === p}, s.selectedPage)}
                    >{p}</span>
                })}
            </div>
            <button disabled={portionNumber===portionCount} onClick={()=> setPortionNumber(portionNumber+1)}>Next</button>
        </div>
    );
};

