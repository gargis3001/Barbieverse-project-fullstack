import { useEffect, useRef, useState } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../ReviewForm/ReviewForm';
import './Reviews.css';
import cleanImageUrl from '../../utils/cleanImageUrl.js';

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  const { movieId } = useParams();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Fetch movie details when movieId changes
  useEffect(() => {
    getMovieData(movieId);
  }, [movieId]);

  // Fetch reviews once movie.movieNumber is available
  useEffect(() => {
    const fetchReviews = async () => {
      if (movie?.movieNumber) {
        try {
          const response = await api.get(`/api/v1/reviews?movieNumber=${movie.movieNumber}`);
          setReviews(response.data);
          console.log("Fetched reviews:", response.data);
        } catch (err) {
          console.error("Error fetching reviews:", err);
        }
      }
    };

    fetchReviews();
  }, [movie?.movieNumber]);

  // Handle rating click
  const handleRating = (value) => {
    setRating(value);
  };

  // Handle hover effects
  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  // Add a new review
  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        movieNumber: movie?.movieNumber,
      });

      setReviews([...reviews, response.data]);
      rev.value = "";
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  };

  return (
    <div className="reviews-page">
      <div className="reviews-overlay">
        <Container>
          <Row>
            <Col>
              <h1 className="reviews-title">Reviews</h1>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={4} className="poster-column">
              <div className="poster-container">
                {movie?.posterImage ? (
                  <img
                    src={movie.posterImage}
                    alt={`${movie.title || 'Movie'} Poster`}
                    className="movie-poster"
                    onError={(e) => {
                      console.log('Image failed to load:', movie.posterImage);
                      e.target.src = '/api/placeholder/300/450'; // fallback
                    }}
                  />
                ) : (
                  <div className="poster-placeholder">
                    <div className="placeholder-content">
                      <i className="fas fa-film"></i>
                      <p>Poster Loading...</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="heart-rating-container-small">
                <div className="heart-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`heart ${
                        star <= (hoverRating || rating) ? 'filled' : 'empty'
                      }`}
                      onClick={() => handleRating(star)}
                      onMouseEnter={() => handleMouseEnter(star)}
                      onMouseLeave={handleMouseLeave}
                    >
                      💖
                    </span>
                  ))}
                </div>
                <div className="rating-display-small">
                  {rating > 0 ? `${rating} out of 5 hearts` : 'Click to rate'}
                </div>
              </div>
            </Col>
            <Col md={8} className="content-column">
              <div className="content-container">
                <Row>
                  <Col>
                    <ReviewForm
                      handleSubmit={addReview}
                      revText={revText}
                      labelText="Write a Review?"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="reviews-divider"></div>
                  </Col>
                </Row>
                <div className="reviews-list">
                  {reviews?.length > 0 ? (
                    reviews.map((r, index) => (
                      <div key={index} className="review-item">
                        <div className="review-content">
                          <p className="review-text">{r.body}</p>
                        </div>
                        <div className="review-divider"></div>
                      </div>
                    ))
                  ) : (
                    <p className="text-light">No reviews yet.</p>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Reviews;