import React, { useEffect, useState } from "react"
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import axios from "axios"
import './App.css';

// App components and API key
import SearchForm from "./components/SearchForm";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import NoMatch from "./components/NoMatch";
import NotFound from "./components/NotFound";
import apiKey from "./config";

const App = (props) => {

  // State variables
  const location = useLocation();
  const [photos, setPhotos] = useState([]);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

    // Fetch photos from Flickr API using axios
  const searchForPhoto = (activeFetch = "cats") => {
    setLoading(true);
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${activeFetch}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        // handle success
        if (activeFetch === "cats") {
          setCats(response.data.photos.photo);
          setLoading(false);
        } else if (activeFetch === "dogs") {
          setDogs(response.data.photos.photo);
          setLoading(false);
        } else if (activeFetch === "computers") {
          setComputers(response.data.photos.photo);
          setLoading(false);
        } else {
          setPhotos(response.data.photos.photo);
          setLoading(false);
        }
      })
      .catch(error => {
        // handle error
        console.log("Error fatching and parsing data", error);
      });
    return () => { activeFetch = false }
  };

  useEffect(() => {
    searchForPhoto(query);
    searchForPhoto('cats');
    searchForPhoto('dogs')
    searchForPhoto('computers')
    searchForPhoto(location.pathname)
  }, [query]);

    // Listen to URL changes and update searchTerm
  useEffect(() => {
    const pathname = location.pathname;
    const searchTermFromPath = pathname.replace(pathname.includes('search') ? '/search/' : '/', '');
    // Set searchTerm state to the search term in the URL, or 'cats' if none is present
    setQuery(searchTermFromPath || 'cats');
  }, [location.pathname]);

  const handleQueryChange = searchText =>{
    setQuery(searchText);
  }
  
  // Render components with React Router
  return (
    <div>
        <div className="container">
          <h1 className="main-title">Photo search</h1>
          <SearchForm changeQuery={handleQueryChange} />
        </div>
        <div className="main-nav">
        <Nav />
      </div>
      <div className="main-content">
        {
          (loading)
            ? <p>Loading....</p>
            : <Routes>
              <Route path="/" element={<Navigate to="/cats" />} />
              <Route path="/cats" element={<Gallery data={cats} />} />
              <Route path="/dogs" element={<Gallery data={dogs} />} />
              <Route path="/computers" element={<Gallery data={computers} />} />
              <Route path="/search/:searchText" element={<Gallery data={photos} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        }
      </div>
    </div>
  );
}
export default App;
