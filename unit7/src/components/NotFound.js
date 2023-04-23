import React from 'react';

//displays if URL path does not exist
const NotFound = (props) => {
    return (
        <div className='not-found'>
            <h3>Error 404</h3>
            <p>This page does not exist.</p>
        </div>
    )
};

export default NotFound;