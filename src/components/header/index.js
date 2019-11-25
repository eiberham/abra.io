import React from 'react';
import './styles.scss';

const Header = () => {
    return (
        <header className="header">
            <div>
                <h1>{'<Hi />'}, I'm Abraham.</h1>
                <span className="mail">
                    <a href="mailto:cedenoabraham@gmail.com">cedenoabraham(at)gmail.com</a>
                </span>
            </div>
        </header>
    )
}

export default Header;