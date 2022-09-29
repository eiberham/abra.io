import React from 'react';
import { FaGithubSquare } from "react-icons/fa";

import Newsletter from '../newsletter'
import './styles.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <Newsletter />
                <div className="footer__bottom">
                    <span>2022 - Designed by Abraham</span>
                    <div className="footer__follow">
                        <a aria-label="github" href="https://github.com/eiberham"><FaGithubSquare /></a>
                    </div>
                </div>
            </section>
        </footer>
    )
};

export default Footer;