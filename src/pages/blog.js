import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

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
            <section>
                <h1>Blog</h1>
                <h2>
                    Welcome to the blog, here you'll know about things i do and learn in my journey
                    as a developer.
                </h2>
            </section>
        </Layout>
    )
}