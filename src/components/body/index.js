import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Body = ({children}) => {
    return (
        <section className="paragraph">
            <h2>Software Engineer.</h2>
            <p>
                I’ve been in the tech industry for around 8 years. During all 
                those years I’ve built things mostly with HTML, CSS, Javascript, PHP and Golang in 
                Fullstack and Frontend positions.
            </p>
            <p>
                Lately I’ve been more focused on the Frontend side working with React, using functional
                programming techniques, writing unit tests and sometimes automating tasks with Golang.
            </p>
            <p>
                You’ll find more detailed information about my experience in my Resume, also if you want 
                to get a sense of how I code there’s a github repository where you can see all the side 
                projects I've built and their underlying technologies.
            </p>
            { children }
        </section>
    )
};

Body.propTypes = {
    children: PropTypes.node
};

export default Body;