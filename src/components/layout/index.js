import React from 'react';
import { css, Global } from "@emotion/react"

import Footer from "../footer"
import './styles.scss';


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
                    padding: 0
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
                #___gatsby {
                    width: 100%;
                }
            `}
            />
            <div className="wrapper">
                <main className="container">
                    {children}
                </main>
                <Footer />
            </div>
        </React.Fragment>
    )
};

export default Layout;