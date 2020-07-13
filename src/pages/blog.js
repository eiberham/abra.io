import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

import { FaGhost } from "react-icons/fa";

export default () => {
    return (
        <Layout>
            <Helmet>
                <title>Abraham</title>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap" rel="stylesheet"></link>
                <meta name="description" content="Blog"></meta>
                <meta name="keywords" content="Software, Development"></meta>
            </Helmet>
            <section className="paragraph">
                <h1>Articles, tutorials, findings, scripts and whatnot.</h1>
                <FaGhost size={120} color="lightblue" />
            </section>
        </Layout>
    )
}