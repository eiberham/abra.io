import React from 'react';
import './styles.scss';

import { FaBookReader } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="/"><span className="logo">Abraham's Blog</span></a>
                <a href="/posts"><FaBookReader color="green"/> Articles</a>
            </div>
        </header>
    )
}

export default Header;