import React from 'react'
import Frame from '../images/frame.png'
export default function Meme() {
    return (
        <div className='meme-div'>
            <div className='meme-textInput'>
                <input 
                    className='firstTextInput'
                    placeholder='Shut Up' 
                />
                <input 
                    placeholder='And take my money'
                />
            </div>
            <button className='meme-button'>Get a new meme image <img className='meme-frame' src={Frame} /></button>
        </div>
    )
}