package com.gargi3001.barbieverse;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "movies")
public class Movies {

    @Id
    private ObjectId _id;

    @Field("Movie_number")  // Changed to match your database field name
    private int movieNumber;

    @Field("Era")
    private String era;

    @Field("Release_Date")
    private String releaseDate;

    @Field("Movie_Title")
    private String movieTitle;

    @Field("Ending_Credits_Quote")
    private String endingCreditsQuote;

    @Field("Poster_Image")
    private String posterImage;

    @Field("backdrops")
    private List<String> backdrops;

    // Stores only the ObjectIds of reviews (this is persisted)
    @Field("reviewIds") // Match this to your actual MongoDB field name
    private List<ObjectId> reviewIds;

    // This will be populated via $lookup and NOT stored in MongoDB
    @Transient
    private List<Reviews> reviews;

    // Constructors
    public Movies() {}

    public Movies(ObjectId _id, int movieNumber, String era, String releaseDate,
                  String movieTitle, String endingCreditsQuote, String posterImage,
                  List<String> backdrops, List<ObjectId> reviewIds, List<Reviews> reviews) {
        this._id = _id;
        this.movieNumber = movieNumber;
        this.era = era;
        this.releaseDate = releaseDate;
        this.movieTitle = movieTitle;
        this.endingCreditsQuote = endingCreditsQuote;
        this.posterImage = posterImage;
        this.backdrops = backdrops;
        this.reviewIds = reviewIds;
        this.reviews = reviews;
    }

    // Getters and Setters
    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public int getMovieNumber() {
        return movieNumber;
    }

    public void setMovieNumber(int movieNumber) {
        this.movieNumber = movieNumber;
    }

    public String getEra() {
        return era;
    }

    public void setEra(String era) {
        this.era = era;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public String getEndingCreditsQuote() {
        return endingCreditsQuote;
    }

    public void setEndingCreditsQuote(String endingCreditsQuote) {
        this.endingCreditsQuote = endingCreditsQuote;
    }

    public String getPosterImage() {
        return posterImage;
    }

    public void setPosterImage(String posterImage) {
        this.posterImage = posterImage;
    }

    public List<ObjectId> getReviewIds() {
        return reviewIds;
    }

    public List<String> getBackdrops() {
        return backdrops;
    }

    public void setBackdrops(List<String> backdrops) {
        this.backdrops = backdrops;
    }

    public void setReviewIds(List<ObjectId> reviewIds) {
        this.reviewIds = reviewIds;
    }

    public List<Reviews> getReviews() {
        return reviews;
    }

    public void setReviews(List<Reviews> reviews) {
        this.reviews = reviews;
    }
}



