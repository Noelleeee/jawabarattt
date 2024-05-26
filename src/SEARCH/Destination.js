import React, { useState } from "react";
import axios from "axios";
import "./Destination.css";
import background from "./background.jpg"; // Adjust the path accordingly

const Destination = () => {
  const [keyword, setKeyword] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    const API_KEY = "AIzaSyArsVDHyG2Z_sGVx2CHDVsAN3aW-aa7o-0";
    const CX = "30840cd3e1f6845f8";

    try {
      const response = await axios.get(
        "https://www.googleapis.com/customsearch/v1",
        {
          params: {
            key: API_KEY,
            cx: CX,
            q: keyword,
          },
        }
      );
      setDestinations(response.data.items || []);
    } catch (error) {
      if (error.response) {
        setError(`Server responded with status code ${error.response.status}`);
      } else if (error.request) {
        setError("No response received from server");
      } else {
        setError(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className="destination-search-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        paddingLeft: "8%",
        paddingRight: "8%",
      }}
    >
      <div className="destination-search-navbar custom-navbar">
    
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/media">MEDIA</a>
            </li>
            <li>
              <a href="/search">SEARCH</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="destination-search-destination-container">
        <div className="destination-search-destination-search">
          <input
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch} disabled={loading}>
            Search
          </button>
        </div>
        {error && (
          <p className="destination-search-error-message">Error: {error}</p>
        )}
        {destinations.length > 0 && (
          <ul className="destination-search-destination-list">
            {destinations.map((destination, index) => (
              <li key={index} className="destination-search-card__article">
                <h2 className="destination-search-card__title">
                  {destination.title}
                </h2>
                <p
                  className="destination-search-card__description"
                  dangerouslySetInnerHTML={{ __html: destination.snippet }}
                ></p>
                <a
                  href={destination.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="destination-search-card__button"
                >
                  Read more
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Destination;
