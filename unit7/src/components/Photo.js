import React from 'react';

//uses flickr API via props to display photo

const Photo = props => (
  <li>
    <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.title}/>
  </li>
);

export default Photo;