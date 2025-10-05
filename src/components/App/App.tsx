import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies, Movie } from "../../services/movieService";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import { toast, Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";

const App = () => {
  const [query, setQuery] = useState("");

  // React Query
  const { data: movies = [], refetch, isFetching, isError } = useQuery<Movie[]>({
    queryKey: ["movies", query],
    queryFn: () => fetchMovies(query),
    enabled: false, // не запускаем автоматически
    staleTime: 1000 * 60 * 5, // кеш 5 минут
  });

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setQuery(searchQuery);
    refetch(); // запускаем запрос
  };

  if (isError) toast.error("There was an error, please try again...");

  return (
    <div>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {isFetching ? <Loader /> : <MovieGrid movies={movies} />}
    </div>
  );
};

export default App;
