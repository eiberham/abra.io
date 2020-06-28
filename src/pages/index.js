import React from "react"
import { Helmet } from "react-helmet";

import Header from '../components/header';
import Footer from '../components/footer';
import Layout from "../components/layout";

export default () => (
    <Layout>
        <Header />
        <Helmet>
            <title>Abraham</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap" rel="stylesheet"></link>
            <meta name="description" content="Abraham's Portfolio"></meta>
            <meta name="keywords" content="Software, Developeblogr, Frontend, Portfolio"></meta>
        </Helmet>
        <article>
            <h2>Software Engineer.</h2>
            <p>
                I’m a software engineer, i’ve been in the tech industry for around 8 years. During all 
                those years i’ve built things mostly with html, css, javascript, php and golang in 
                fullstack and frontend positions.
            </p>
            <br/>
            <p>
                Lately i’ve been more focused in the frontend side working with react, using functional
                programming techniques, writing unit tests and sometimes automating tasks with golang.
            </p>
            <br />
            <p>
                You’ll find more detailed information about my experience in my resume, also if you want 
                to get a sense of how i code there’s a github repository where you can see all the side 
                projects i have built and their underlying technologies.
            </p>
            <br />
        </article>
        <Footer />
    </Layout>
);
