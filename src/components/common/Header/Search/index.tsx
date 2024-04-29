import React, { useState, useRef, useEffect } from "react";
import * as s from "./style";
import SearchIcon from "../../../../assets/search.svg";
import { useSearchPostQuery, Post } from "../../../../hooks/Search/useSearchPostQuery";

const Search = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, isError } = useSearchPostQuery(query);

  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setInputVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleContainerClick = () => {
    setInputVisible(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setQuery("");
      console.log(data);
    }
  };

  return (
    <s.SearchContainer onClick={handleContainerClick}>
      <s.SearchWrap>
        <img src={SearchIcon} alt="Search" style={{ width: "20px", height: "20px" }} />
        {isInputVisible ? (
          <input
            type="text"
            placeholder="Search..."
            ref={inputRef}
            autoFocus
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleSearch}
          />
        ) : (
          <span>Search...</span>
        )}
      </s.SearchWrap>
    </s.SearchContainer>
  );
};

export default Search;
