import React from "react";

const SearchBox = ({
  handleSearch,
}: {
  handleSearch: (text: string) => void;
}) => {
  return (
    <div>
      <input
        className="w-1/2 mx-auto p-4 border-2 border-white rounded-md"
        placeholder="Search your favorite cocktail"
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
