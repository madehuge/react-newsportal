import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function SearchBox({ searchOpen, toggleSearchBox }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
      toggleSearchBox(); // Close after searching
    }
  };

  if (!searchOpen) return null; // Prevent rendering when closed

  return (
    <div className="search-overlay">
      <div className="search-box">
        <button className="close-search" onClick={toggleSearchBox}>
          ✖
        </button>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
    </div>
  );
}
