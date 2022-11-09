import React from 'react'
import TrollFace from '../images/troll-face.png'

export default function Header() {
    return (
        <div className='header-div'>
            <div className='inner-div'>
                <img className='header-icon' src={TrollFace} />
                <h1 className='header-title'>Meme Generator</h1>
            </div>
            <div className='header-subtitle'>
                <h3>React Course - Project 3</h3>
            </div>
        </div>
    )
}