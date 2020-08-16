import React from 'react';
import './styles.scss';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__follow">
                <a aria-label="github" href="https://github.com/eiberham"><FaGithubSquare /></a>
                <a aria-label="linkedin" href="https://www.linkedin.com/in/abraham-cedeño-135809107/"><FaLinkedin /></a>
            </div>
        </footer>
    )
};

export default Footer;