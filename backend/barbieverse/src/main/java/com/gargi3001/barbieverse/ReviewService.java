package com.gargi3001.barbieverse;

//import com.mongodb.client.result.UpdateResult;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.Update;
//import org.springframework.data.mongodb.core.query.Query;
//import org.springframework.stereotype.Service;
//
//@Service
//public class ReviewService {
//    @Autowired
//    private ReviewRepository reviewRepository;
//
//    @Autowired
//    private MongoTemplate mongoTemplate;
//    public Reviews createReviews(String reviewBody, int movieNumber){
//  Reviews review = reviewRepository.insert(new Reviews(reviewBody));
//
//
//  mongoTemplate.update(Movies.class)
//          .matching(Criteria.where("movieNumber").is(movieNumber))
//          .apply(new Update().push("reviewIDs").value(review))
//          .first();
//  return review;
//    }
//}

import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Reviews createReviews(String reviewBody, int movieNumber) {
        Reviews review = new Reviews(reviewBody,movieNumber);
        review.setMovieNumber(movieNumber);
        review = reviewRepository.insert(review);

        // push review id to movie as you did
        mongoTemplate.update(Movies.class)
                .matching(Criteria.where("movieNumber").is(movieNumber))
                .apply(new Update().push("reviewIds").value(review.getId()))
                .first();

        return review;
    }

}




