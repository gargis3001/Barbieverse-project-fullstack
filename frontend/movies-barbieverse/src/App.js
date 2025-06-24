import { useEffect, useState } from 'react';
import './App.css';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Reviews from './components/Reviews/Reviews';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  // Fetch all movies (for home)
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (err) {
      console.log("Error fetching movies:", err);
    }
  };

  // Fetch one movie by movieNumber (for Reviews page)
  const getMovieData = async (movieNumber) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieNumber}`);
      setMovie(response.data);
      setReviews(response.data.reviews || []);
    } catch (err) {
      console.log("Error fetching movie:", err);
    }
  };



  useEffect(() => {
    getMovies();
     document.body.style.zoom = "100%";
    document.documentElement.style.zoom = "100%";
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home movies={movies} />} />
          <Route
            path="Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
