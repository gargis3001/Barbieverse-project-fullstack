package com.gargi3001.barbieverse;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movies, ObjectId>{

    Optional<Movies> findByMovieNumber(int movieNumber);
    @Aggregation(pipeline = {
            "{ $lookup: { from: 'reviews', localField: 'reviewIds', foreignField: '_id', as: 'reviews' } }"
    })
    List<Movies> findAllMoviesWithReviews();

}
