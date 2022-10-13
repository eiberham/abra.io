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
                    <span>Content on this Site is Copyright © 2022 Abraham. Licensed under a <a aria-label="creative-commons" href="https://creativecommons.org/licenses/by/3.0">Creative Commons Attribution 3.0 License</a></span>
                    <div className="footer__follow">
                        <a aria-label="github" href="https://github.com/eiberham"><FaGithubSquare /></a>
                    </div>
                </div>
            </section>
        </footer>
    )
};

export default Footer;