## 🧪 API Testing via Postman

This folder includes a ready-to-use **Postman collection** (`Barbieverse_API_Collection.json`) for testing the Barbieverse backend API.

### ✅ How to Use

1. Open [Postman](https://www.postman.com/)
2. Click **Import** → Upload the JSON collection file
3. Explore pre-configured requests for:
   - `GET /api/v1/movies` – Fetch all movies
   - `GET /api/v1/movies/{movieId}` – Get a single movie
   - `GET /api/v1/reviews` – Get reviews (with optional filter)
   - `POST /api/v1/reviews` – Submit a new review

### ⚙️ Prerequisites

- Ensure the backend server is running locally  
  Default URL: `http://localhost:8080`

- If you've customized the port or base URL, update the **collection environment variables** accordingly

---

Feel free to modify or extend the collection as needed. It’s a great way to verify endpoints, test request payloads, and debug during development.

Happy testing! 🎬💬✨

