import React from "react"
import { Helmet } from "react-helmet";

import Header from '../components/header';
import Footer from '../components/footer';
import Layout from "../components/layout";
import Body from "../components/body";

export default () => (
    <Layout>
        <Header />
        <Helmet>
            <title>Abraham</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap" rel="stylesheet"></link>
            <meta name="description" content="Abraham's Portfolio"></meta>
            <meta name="keywords" content="Software, Developer, Blog, Frontend, Portfolio"></meta>
        </Helmet>
        <Body />
        <Footer />
    </Layout>
);
