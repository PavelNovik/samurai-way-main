import React from 'react';
import s from "./Message.module.css"

const Message = () => {
    return (
        <div className={s.message}>
            <img alt={'avatar'}
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9q3EiN3joifQUrBIB1o9XZD66BkxVYl7lL-Y4UjSc0FhDLc2iAv1yHxplb0Mw8FcBrHw&usqp=CAU"}/>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur eius inventore laborum nemo rem? Ab aliquid dolorem et provident?</span>
        </div>
    );
};

export default Message;