import React from 'react'
import githubIcon from '../img/github.png'
import telegramIcon from '../img/telegram.png'
import cvIcon from '../img/cv.png'

export default function Navigation() {
    return (
        <nav>
            <div className='nav'>
                <div className='nav-jump'>
                    <a href="https://drive.google.com/file/d/1HjtPus4eZrlaJz_9Jfc30DL4NBcBJVGZ/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img className="collection__mini" src={cvIcon} alt="CV"/>
                    </a>
                </div>
                <div className='nav-jump'>
                    <a href="https://t.me/askoshelenko" target="_blank" rel="noreferrer">
                        <img className="collection__mini" src={telegramIcon} alt="Telegram"/>
                    </a> 
                </div>
                <div className='nav-jump'>
                    <a href="https://github.com/ASKoshelenko" target="_blank" rel="noreferrer">
                        <img className="collection__mini" src={githubIcon} alt="GitHub"/>
                    </a>
                </div>     
            </div>
        </nav>
    )
}