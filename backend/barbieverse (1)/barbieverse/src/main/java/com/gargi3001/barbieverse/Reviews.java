package com.gargi3001.barbieverse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "reviews")
public class Reviews {

    @Id
    private ObjectId id;

    private String body;

    public Reviews() {}

    public Reviews(String body) {
        this.body = body;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }


    @Field("movieNumber")
    private int movieNumber;

    // Convenience constructor
    public Reviews(String body, int movieNumber) {
        this.body = body;
        this.movieNumber = movieNumber;
    }
    public void setMovieNumber(int movieNumber) {
        this.movieNumber = movieNumber;
    }

}





