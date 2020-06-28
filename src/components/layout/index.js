import React from 'react';
import './styles.scss';
import { css, Global } from "@emotion/core"

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Global
                styles={css`
                body {
                    background: #fefefe;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    font-family: 'Roboto', sans-serif;
                    color: #555;
                }
                body.dark {
                    -webkit-font-smoothing: antialiased;
                    background: #282c35 !important;
                    color: #e4d0a0 !important;
                }
                * {
                    box-sizing: border-box;
                }
                a {
                    text-decoration: none;
                }
                p {
                    margin: 0;
                    width: 100%;
                    text-align: justify;
                }
            `} 
            />
            <main className="container">
                {children}
            </main>
        </React.Fragment>
    )
};

export default Layout;