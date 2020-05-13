import React from 'react';
import './standard-button.scss';

export interface StandardButtonProps {
    value?: string,
    name?: string,
    className?: string,
    id?: string,
    clickHandler(e: any): void,
    color?: string,
    bgColor?: string    
}

export default function StandardButton({value='Label', className='standard-button', name='standard-button', id='id-standard-button', clickHandler, color='white', bgColor='green'}: StandardButtonProps) {
    let style = {
        color: color,
        backgroundColor: bgColor
    }
    return (
        <input id={id} type='button' value={value} className={className} name={name} onClick={clickHandler} style={style}/>
    )
}