import React from 'react';
import { FaGithubSquare } from "react-icons/fa";

import './styles.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <span>Made by Abraham</span>
                <div className="footer__follow">
                    <a aria-label="github" href="https://github.com/eiberham"><FaGithubSquare /></a>
                </div>
            </section>
        </footer>
    )
};

export default Footer;