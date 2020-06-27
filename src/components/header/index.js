import React from 'react';
import './styles.scss';

import Toggle from 'react-toggle';
import { IoIosSunny, IoIosMoon } from "react-icons/io";

import { ThemeToggler } from 'gatsby-plugin-dark-mode';


import 'react-toggle/style.css';

const Header = () => {
    /* const [dark, setDark] = useState(false);
    const onToggleChange = useCallback(()=> {
        toggleTheme(dark ? 'dark' : 'light')
    }, [dark]) */
    return (
        <header className="header">
            <div>
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
                <span className="mail">
                    <a arial-label="email" href="mailto:cedenoabraham@gmail.com">cedenoabraham(at)gmail.com</a>
                </span>
            </div>
        </header>
    )
}

export default Header;