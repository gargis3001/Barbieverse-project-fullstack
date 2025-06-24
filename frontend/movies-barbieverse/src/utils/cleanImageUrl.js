// cleanImageUrl.js
const cleanImageUrl = (url) => {
  if (!url) return 'https://via.placeholder.com/300x450?text=No+Poster';

  try {
    // Remove query string like ?cb=2020...
    const cleaned = url.split('?')[0];

    // Allow only .jpg or .png files
    if (cleaned.endsWith('.jpg') || cleaned.endsWith('.png')) {
      return cleaned;
    }

    return 'https://via.placeholder.com/300x450?text=No+Poster';
  } catch (err) {
    console.error("Error cleaning image URL:", err);
    return 'https://via.placeholder.com/300x450?text=No+Poster';
  }
};

export default cleanImageUrl;
