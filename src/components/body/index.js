import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Body = ({children}) => {
    return (
        <section className="paragraph">
            {/* <article> */}
                <h2>Software Engineer.</h2>
                <p>
                    I’m a software engineer, i’ve been in the tech industry for around 8 years. During all 
                    those years i’ve built things mostly with html, css, javascript, php and golang in 
                    fullstack and frontend positions.
                </p>
                <p>
                    Lately i’ve been more focused in the frontend side working with react, using functional
                    programming techniques, writing unit tests and sometimes automating tasks with golang.
                </p>
                <p>
                    You’ll find more detailed information about my experience in my resume, also if you want 
                    to get a sense of how i code there’s a github repository where you can see all the side 
                    projects i have built and their underlying technologies.
                </p>
                { children }
            {/* </article> */}
        </section>
    )
};

Body.propTypes = {
    children: PropTypes.node
};

export default Body;