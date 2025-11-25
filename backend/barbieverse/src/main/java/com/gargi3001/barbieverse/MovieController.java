package com.gargi3001.barbieverse;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
@CrossOrigin(origins = "http://localhost:5173", originPatterns = "https://barbieverse-frontend-gargisingh.vercel.app")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public ResponseEntity<List<Movies>> getAllMovies() {
        return new ResponseEntity<List<Movies>>(movieService.allMovies(), HttpStatus.OK);
    }

    @GetMapping("/{MovieNumber}")  //
    public ResponseEntity<Optional<Movies>> getSingleMovie(@PathVariable("MovieNumber") int MovieNumber) {
        return new ResponseEntity<>(movieService.singleMovie(MovieNumber), HttpStatus.OK);
    }
}



