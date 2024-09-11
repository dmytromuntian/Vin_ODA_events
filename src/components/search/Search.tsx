import React, { useState } from "react";
import "./search.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface SearchComponentProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  onSearch,
  placeholder = "Пошук",
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleButtonClick = () => {
    onSearch(query);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="input-group has-search">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <div className="input-group-append">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleButtonClick}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
