import React from 'react';

type ContactItemProps = {
    contactTitle: string
    contactValue: string
}
export const ContactItem = ({contactTitle,contactValue}:ContactItemProps)=> {
    return <span>{contactTitle} : {contactValue}</span>
}
