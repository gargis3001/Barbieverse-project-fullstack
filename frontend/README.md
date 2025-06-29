## 💖 Barbieverse Frontend

A **React-based** frontend for the Barbieverse movie review platform. This single-page application provides interactive UI features like movie browsing, review submission, and dynamic rating — all in a vibrant, Barbie-themed design.

---

### 🚀 Features

- Single Page Application (SPA) built with React 19  
- Movie listing, detail view, and reviews  
- 5-heart interactive rating system  
- Responsive, themed UI with Bootstrap & MUI  
- Axios-based API integration with backend  
- Clean routing and state management  

---

### 🧱 Technology Stack

| Category        | Technologies                                              | Purpose                                   |
|----------------|-----------------------------------------------------------|-------------------------------------------|
| Core Framework  | React 19.1.0, ReactDOM 19.1.0                             | UI and DOM rendering                      |
| Routing         | react-router-dom 7.6.2                                    | Client-side routing                       |
| HTTP Client     | axios 1.9.0                                               | API communication                         |
| UI Libraries    | @mui/material, react-bootstrap, bootstrap                 | Layout and styling                        |
| Media Components| react-player, react-slick, slick-carousel                | Video & carousel components               |
| Icons           | @fortawesome/react-fontawesome, free-solid-svg-icons      | Iconography                               |
| Testing         | @testing-library/react, @testing-library/jest-dom         | Component testing                         |
| Build Tools     | react-scripts 5.0.1                                       | Development & production builds           |

---

### 🏗️ Application Architecture

The app uses a centralized state model managed in `App.js`. Data flows down to child components via props, and events bubble up through callbacks.


### 📌 Core State Variables in App.js

| State Variable | Type     | Purpose                                 |
|----------------|----------|-----------------------------------------|
| movies         | Array    | All movies for the Home page            |
| movie          | Object   | Selected movie for Reviews page         |
| reviews        | Array    | Reviews for selected movie              |

---

### 🌐 API Integration

| Function         | Endpoint                            | Purpose                        |
|------------------|--------------------------------------|--------------------------------|
| `getMovies()`     | `GET /api/v1/movies`                 | Fetch all movies              |
| `getMovieData()`  | `GET /api/v1/movies/{movieNumber}`   | Fetch movie + reviews         |
| `addReview()`     | `POST /api/v1/reviews`               | Submit new review             |

All API calls are handled using Axios with a centralized configuration.

---

### 🧭 Routing Configuration

The app uses React Router with nested routing and dynamic URL parameters.

| Route                   | Component | Props Passed                                 |
|------------------------|-----------|----------------------------------------------|
| `/` (index route)       | `Home`     | `movies`                                     |
| `/Reviews/:movieId`     | `Reviews`  | `movie`, `reviews`, `getMovieData`, `setReviews` |

---
### 📝 Components Overview

This React application is built with modular components that manage UI rendering, user input, and API communication. Below is a summary of the key UI components:

---

#### 📺 Home.js

- Displays all available movies in a responsive grid
- Uses movie posters as interactive cards
- Receives `movies` array as props from the `App` component

---

#### 🧾 Reviews.js

- Fetches and displays detailed info for a selected movie
- Displays associated reviews from backend
- Integrates a **5-heart emoji rating system** for user ratings
- Renders the `ReviewForm` for new review submissions
- Uses `useParams()` from React Router to extract `movieId` from the URL
- Manages `rating`, `hoverRating`, and review state

---

#### 🖊️ ReviewForm.js

- Provides a **controlled textarea input** for users to submit reviews
- Uses `ref` to access the input value on submit
- Submits reviews via the `handleSubmit` callback (passed as a prop)
- Styled using `react-bootstrap` components (`Form.Group`, `Form.Control`, `Button`)

---

### 🎨 Styling & Theme

The Barbieverse frontend embraces a bold and vibrant design language:

- **Pink gradient backgrounds**, playful fonts, and modern layout
- Typography using `'Quicksand'` and `'Playfair Display'` for elegance and clarity
- CSS animations, custom scrollbars, and responsive layout for seamless experience across devices
- Organized component-level styles (e.g., `App.css`, `Reviews.css`) for maintainability






