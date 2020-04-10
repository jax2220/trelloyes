import React from 'react';
import './Card.css';

export default function card(props){
    return (
        <div className='card'>
            <button type='button'>Delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}