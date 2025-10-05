import axios from "axios";

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
}

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGQ3MTNhOWE3N2YyMTY4MjdhMTg5NWMyMTFhNWVkMCIsIm5iZiI6MTc1ODk3OTMxMi4zMzMsInN1YiI6IjY4ZDdlNGYwNjJkYjkzNmU5M2I0MGNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pn1Qqa8l4LtHElJnlRJunitHugPYfQdcWb_SpZwU4eM";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  if (!query) return [];

  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        language: "en-US",
        include_adult: false,
      },
    });
    return response.data.results;
  } catch (error: any) {
    console.error("Error fetching movies:", error.response?.data || error.message);
    throw new Error("Failed to fetch movies");
  }
};
