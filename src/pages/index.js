import React, { lazy } from "react"
const Layout = lazy(() => import("../components/layout"));

export default () => (
    <Layout>
        <article>
            <h2>Software Developer.</h2>
            <p>
                I'm a passionate frontend developer who loves building software and contributing 
                to open source projects, tries to keep up to date with new trends and is eager to 
                level up coding skills.
            </p>
            <br />
            <p>
                Critical thinking, high understanding of software architecture design and awareness 
                of how to create software which is scalable, easily maintainable, extensible and easy 
                to test.
            </p>
            <br />
            <p>
                The technologies i enjoy the most working with right now are React.js, Node.js and 
                Typescript. Check out some of my side projects / open source contributions and 
                overall resume in the links below ↓.
            </p>
        </article>
    </Layout>
);
