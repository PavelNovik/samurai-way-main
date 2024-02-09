import React from 'react';
import s from "./Paginator.module.css";

type Props = {
    pages: number[]
    onPageChanged: (page: number) => void
    currentPage: number
}
export const Paginator = (props:Props) => {
    return (
        <div>
            {props.pages.map(p => {

                return <span key={p} onClick={() => props.onPageChanged(p)}
                             className={props.currentPage === p ? s.selectPage + ' ' + s.selectedPage : s.selectPage}>{p}</span>
            })}
        </div>
    );
};

