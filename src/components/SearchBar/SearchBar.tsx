import { useState, FormEvent } from "react";

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") return;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
