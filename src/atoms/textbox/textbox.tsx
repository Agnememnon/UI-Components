import React from 'react';
import './textbox.scss';

export interface TextboxProps {
    hint?: string,
    changeHandler(e: any): void,
    id?: string,
    className?: string
}

export default function Textbox({hint='type text here', id='textbox-id', className='textbox', changeHandler}: TextboxProps) {
    return(
        <input id={id} type='text' placeholder={hint} className={className} onChange={changeHandler}/>
    )
}