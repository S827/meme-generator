import React from 'react'

export default function Header() {
    return (
        <div className='header-div'>
            <div className='inner-div'>
                <img className='header-icon' src='https://thenounproject.com/api/private/icons/105264/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjaqJhqlq_dvCgYE1ZEBmK7nt-m5IZeyVtI0fTLv2Xwc5hrta4g9XXXkbMzP8oI_AyYZMNiyAqsphktCOYpyFv_2Dd4g%3D%3D' />
                <h1 className='header-title'>Meme Generator</h1>
            </div>
            <div className='header-subtitle'>
                <h3>React Course - Project 3</h3>
            </div>
        </div>
    )
}