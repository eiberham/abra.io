import React from 'react';
import './styles.scss';
import { FaGithubSquare, FaLinkedin, FaCodepen } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__follow">
                <a name="github" href="https://github.com/wwleak"><FaGithubSquare /></a>
                <a name="linkedin" href="https://www.linkedin.com/in/abraham-cedeño-135809107/"><FaLinkedin /></a>
                <a name="codepen" href="https://codepen.io/wwleak"><FaCodepen /></a>
            </div>
        </footer>
    )
};

export default Footer;