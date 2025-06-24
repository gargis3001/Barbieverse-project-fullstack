import React from "react";
import './Barbie.css';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const cleanImageUrl = (url) => {
  if (!url) return url;
  
  const jpgIndex = url.indexOf('.jpg');
  const pngIndex = url.indexOf('.png');
  
  let extIndex = -1;
  if (jpgIndex !== -1 && pngIndex !== -1) {
    extIndex = Math.min(jpgIndex, pngIndex);
  } else if (jpgIndex !== -1) {
    extIndex = jpgIndex;
  } else if (pngIndex !== -1) {
    extIndex = pngIndex;
  }
  
  if (extIndex === -1) {
    return url; // no image extension found
  }
  
  // Return substring up to (and including) image extension
  return url.substring(0, extIndex + 4);
};

const Barbie = ({ movies }) => {
  const navigate = useNavigate();
  
  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }
  
  return (
    <div className='movie-carousel-container'>
      <div className="movie-carousel-wrapper">
        <div className="movie-carousel-track">
          {movies?.map((movie) => {
            console.log('Movie data:', movie); 
            
            const backdropUrl = movie.backdrops && movie.backdrops.length > 0 
              ? cleanImageUrl(movie.backdrops[0]) 
              : '';
            
            
            const originalPosterUrl = movie.posterImage || movie.poster || '';
            const posterUrl = cleanImageUrl(originalPosterUrl);
            
            const movieTitle = movie.movieTitle || movie.title || 'Unknown Movie';
            const movieNumber = movie.movieNumber || movie.Movie_number || 'N/A';
            const releaseDate = movie.releaseDate || movie.Release_Date || 'Unknown Date';
            
            
            console.log('Original poster URL:', originalPosterUrl);
            console.log('Cleaned poster URL:', posterUrl);
            console.log('Original backdrop URL:', movie.backdrops && movie.backdrops.length > 0 ? movie.backdrops[0] : 'none');
            console.log('Cleaned backdrop URL:', backdropUrl);
            console.log('Movie Number:', movieNumber);
            console.log('Release Date:', releaseDate);
            
            return (
              <div key={movie.movieNumber || movie._id} className="movie-card-container">
                <div
                  className="movie-card"
                  style={{
                    backgroundImage: backdropUrl ?
                      `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${backdropUrl})` :
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      {posterUrl ? (
                        <img
                          src={posterUrl}
                          alt={movieTitle}
                          crossOrigin="anonymous"
                          onLoad={() => console.log('Poster loaded successfully:', posterUrl)}
                          onError={(e) => {
                            console.log('Poster failed to load:', posterUrl);
                            console.log('Error details:', e.type, e.target.src);
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="poster-placeholder" style={{display: posterUrl ? 'none' : 'flex'}}>
                        <span>No Poster</span>
                      </div>
                    </div>
                    <div className="movie-info">
                      <div className="movie-title">
                        <h4>{movieTitle}</h4>
                      </div>

                    </div>
                   <div className="movie-review-button-container">
  <Button variant="info" onClick={() => reviews(movieNumber)}>
    Reviews
  </Button>
</div>

                    <div className="movie-metadata">
                      <div className="movie-number">
                        <span>Movie #{movieNumber}</span>
                      </div>
                      <div className="release-date">
                        <span>{releaseDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Barbie;