import React from 'react';
import preloader from "../../../assets/img/Spin-1s-200px.svg";

export const Preloader = () => {
    return (
        <div>
            <img alt={'loading'} src={preloader}/>
        </div>
    );
};

