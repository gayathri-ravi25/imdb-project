import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    username: "guest",
    profilePic: "https://via.placeholder.com/150",
    watchlist: [],
    ratedMovies: [],
    reviews: [],
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleUpdate = () => {
    const updatedUser = { ...user, username: "Updated Name" };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Profile</h2>
      <div className="flex items-center justify-center">
        <img src={user.profilePic} alt="Profile" className="w-24 h-24 rounded-full border-2 border-gray-400" />
      </div>
      <p className="text-center text-lg mt-2"><strong>Username:</strong> {user.username}</p>
      <button onClick={handleUpdate} className="block mx-auto mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
        Update Username
      </button>
      
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Watchlist</h3>
        {user.watchlist.length === 0 ? <p>No movies in watchlist</p> : user.watchlist.map((movie) => <p key={movie}>{movie}</p>)}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Rated Movies</h3>
        {user.ratedMovies.length === 0 ? <p>No rated movies</p> : user.ratedMovies.map((movie) => <p key={movie}>{movie}</p>)}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Reviews</h3>
        {user.reviews.length === 0 ? <p>No reviews yet</p> : user.reviews.map((review) => <p key={review}>{review}</p>)}
      </div>
    </div>
  );
};

export default Profile;
