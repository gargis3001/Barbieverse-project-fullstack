package com.gargi3001.barbieverse;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public List<Movies> allMovies() {
        return movieRepository.findAllMoviesWithReviews(); // Use $lookup aggregation
    }

    public Optional<Movies> singleMovie(int movieNumber) {
        return movieRepository.findByMovieNumber(movieNumber);
    }
}



