import React from 'react';
import Photo from './Photo';
import NoMatch from './NoMatch';

const Gallery = props => {
    const results = props.data;
    let photoResult;
    //conditional that displays photo grid if results exist
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
        //if not results, NoMatch component is called
        photoResult = <NoMatch />
    }

    return (
        <div className='photo-container'>
            <h1>Gallery</h1>
            <ul>{photoResult}</ul>
        </div>
    );
}

export default Gallery;
