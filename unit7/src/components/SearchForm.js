import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = props => {
    //sets the search state  to empty

    const searchText = useRef(null);
    let navigate = useNavigate();
    //searches text and changes URL path upon search submit

    const handleSubmit = e => {
        e.preventDefault();
        props.changeQuery(searchText.current.value);
        let path = `search/${searchText.current.value}`;
        navigate(path);
        e.currentTarget.reset()
    }

    return (
        <form className="search-form" onSubmit={e => handleSubmit(e)} >
            <label className="is-hidden" htmlFor="search"></label>
            <input type="search"
                ref={searchText}
                name="search"
                placeholder="Search..." />
            <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        </form>
    );
}

export default SearchForm;

