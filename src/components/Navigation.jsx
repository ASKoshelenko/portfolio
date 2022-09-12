import React from 'react'
import githubIcon from '../img/github.png'
import telegramIcon from '../img/telegram.png'
import cvIcon from '../img/cv.png'

export default function Navigation() {
    return (
        <nav>
            <h3>Alexey Koshelenko</h3>
            <h4>You can contact with me:</h4> 
            <div className='nav'>
                <div className='nav-jump'>
                    <h4>CV</h4>
                    <a href="https://drive.google.com/file/d/1HjtPus4eZrlaJz_9Jfc30DL4NBcBJVGZ/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img className="collection__mini" src={cvIcon} alt="CV"/>
                    </a>
                </div>
                <div className='nav-jump'>
                    <h4>Telegram</h4>
                    <a href="https://t.me/askoshelenko" target="_blank" rel="noreferrer">
                        <img className="collection__mini" src={telegramIcon} alt="Telegram"/>
                    </a> 
                </div>
                <div className='nav-jump'>
                    <h4>GitHub</h4>
                    <a href="https://github.com/ASKoshelenko" target="_blank" rel="noreferrer">
                        <img className="collection__mini" src={githubIcon} alt="GitHub"/>
                    </a>
                </div>     
            </div>
        </nav>
    )
}