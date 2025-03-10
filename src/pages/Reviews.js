import { useState, useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const addReview = () => {
    const updatedReviews = [...reviews, { review: newReview, upvotes: 0, downvotes: 0 }];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setNewReview("");
  };

  const upvote = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].upvotes += 1;
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center">Reviews</h2>
      <input 
        type="text" 
        value={newReview} 
        onChange={(e) => setNewReview(e.target.value)} 
        className="p-2 w-full rounded text-black mt-4" 
        placeholder="Write a review..."
      />
      <button onClick={addReview} className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
        Submit Review
      </button>

      {reviews.map((review, index) => (
        <div key={index} className="border-b border-gray-600 py-2 flex justify-between">
          <p>{review.review}</p>
          <button onClick={() => upvote(index)} className="bg-green-500 px-2 py-1 rounded text-white">
            👍 {review.upvotes}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Reviews;