import { Movie } from "../../services/movieService";

interface Props {
  movies: Movie[];
}

const MovieGrid = ({ movies }: Props) => {
  if (!movies.length) return <p>No movies found.</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
