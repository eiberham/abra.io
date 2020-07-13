import React from 'react';
import './styles.scss';

import Toggle from 'react-toggle';
import { IoIosSunny, IoIosMoon } from "react-icons/io";

import { ThemeToggler } from 'gatsby-plugin-dark-mode';


import 'react-toggle/style.css';

const Header = () => {
    return (
        <header className="header">
                <div className="left">
                <h1>{'<Hi />'}, I'm Abraham.</h1>
                <ThemeToggler>
                    {({theme, toggleTheme}) => (
                        <Toggle
                            defaultChecked={theme === 'dark'}
                            className='dark-mode'
                            icons={{
                            unchecked: <IoIosSunny color={'yellow'} size={20} />,
                            checked: <IoIosMoon color={'yellow'} size={20} />,
                            }}
                            onChange={ e => toggleTheme(e.target.checked ? 'dark' : 'light')} 
                        />
                    )}
                </ThemeToggler>
                </div>

                <div className="right">
                    <a 
                        aria-label="blog" 
                        href="/blog" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >blog</a>
                    <a 
                        aria-label="resume" 
                        href="https://drive.google.com/file/d/1b45d3rNyMs9dQq9LraDfyfPic1Z1nU69/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >resume</a>
                    <a arial-label="email" href="mailto:cedenoabraham@gmail.com">cedenoabraham(at)gmail.com</a>
                </div>
        </header>
    )
}

export default Header;