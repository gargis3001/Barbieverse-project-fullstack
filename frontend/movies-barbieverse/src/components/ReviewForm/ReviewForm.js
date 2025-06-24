import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <div className="review-form-container">
      <Form>
        <Form.Group className="mb-3" controlId="reviewTextarea">
          <Form.Label className="review-form-label">{labelText}</Form.Label>
          <Form.Control 
            ref={revText} 
            as="textarea" 
            rows={4} 
            defaultValue={defaultValue}
            className="review-textarea"
            placeholder="Share your thoughts about this movie..."
          />
        </Form.Group>
        <Button 
          variant="outline-light" 
          onClick={handleSubmit}
          className="submit-button"
        >
          Submit Review
        </Button>
      </Form>
    </div>
  );
};

export default ReviewForm;
