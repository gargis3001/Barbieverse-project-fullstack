package com.gargi3001.barbieverse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
@CrossOrigin(origins = "*")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;
    @Autowired
    private ReviewRepository reviewRepository;


    @GetMapping
    public ResponseEntity<List<Reviews>> getReviewsByMovieNumber(@RequestParam int movieNumber) {
        List<Reviews> reviews = reviewRepository.findByMovieNumber(movieNumber);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }


    @PostMapping

    public ResponseEntity<Reviews> createReview(@RequestBody Map<String, Object> payload) {
        String reviewBody = String.valueOf(payload.get("reviewBody"));

        // Safely retrieve and convert movieNumber
        int movieNumber;
        Object movieNumberObj = payload.get("movieNumber");
        if (movieNumberObj instanceof Number) {
            movieNumber = ((Number) movieNumberObj).intValue(); // Convert Number to int
        } else if (movieNumberObj instanceof String) {
            movieNumber = Integer.parseInt((String) movieNumberObj); // Convert String to int
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // Handle invalid input
        }

        Reviews createdReview = reviewService.createReviews(reviewBody, movieNumber);
        return new ResponseEntity<>(createdReview, HttpStatus.CREATED);
    }
}



