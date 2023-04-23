import React from 'react';
import Photo from './Photo';
import NotFound from './NoMatch';

const Gallery = props => {
    const results = props.data;
    let photoResult;
    if (results.length > 0) {
        photoResult = results.map(photo =>
            <Photo
                id={photo.id}
                key={photo.id}
                title={photo.title}
                server={photo.server}
                secret={photo.secret}
            />)
    } else {
        photoResult = <NotFound />
    }

    return (
        <div className='photo-container'>
            <h1>Gallery</h1>
            <ul>{photoResult}</ul>
        </div>
    );
}

export default Gallery;
