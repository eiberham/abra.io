import React from 'react';
import './styles.scss';
import { Helmet } from "react-helmet"
import { css, Global } from "@emotion/core"
import Header from '../header';
import Footer from '../footer';

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Abraham</title>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap" rel="stylesheet"></link>
                <meta name="description" content="Abraham's Portfolio"></meta>
                <meta name="keywords" content="Software, Developer, Frontend, Portfolio"></meta>
            </Helmet>
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
                <Header />
                    {children}
                <Footer />
            </main>
        </React.Fragment>
    )
};

export default Layout;