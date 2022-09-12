import React from 'react'

export default function Navigation() {
    return (
        <nav>
            <h3>Alexey Koshelenko</h3>
            <h4>Connect with me</h4> 
            <div className='nav'>
                <a className='nav-links' href="">
                    <img className="collection__big" src={[0]} alt="CV" />
                </a>
                <a className='nav-links'  href="">
                    <img className="collection__big" src={[0]} alt="GitHub" />
                </a>
                <a className='nav-links'  href="">
                    <img className="collection__big" src={[0]} alt="Telegram" />
                </a>            
            </div>
        </nav>
    )
}