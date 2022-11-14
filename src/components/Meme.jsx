import React from 'react'
import Frame from '../images/frame.png'
import MemeData from '../memesData'
export default function Meme() {
    const[memeImage, setMemeImage] = React.useState('')
    function getMemeImage() {
        const imgDir = MemeData.data.memes
        const memeIndex = Math.floor(Math.random() * imgDir.length)
        const imgURL = imgDir[memeIndex].url
        setMemeImage(imgURL)
    }
    return (
        <main>
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
                <button 
                    className='meme-button'
                    onClick={getMemeImage}
                >
                    Get a new meme image <img className='meme-frame' src={Frame} />
                </button>
            </div>
            <img 
                src={memeImage}
                className='meme-image' 
            />
        </main>
    )
}