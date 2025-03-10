import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Actorprofile = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    if (!id) {
      setError("No actor ID provided.");
      setLoading(false);
      return;
    }

    console.log("Fetching actor data for ID:", id); // Debugging

    axios
      .get(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        setActor(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching actor:", error);
        setError("Failed to load actor details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-white text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return actor ? (
    <div className="p-6 max-w-lg mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <img
        src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : "https://via.placeholder.com/150"}
        alt={actor.name}
        className="w-40 h-40 rounded-full mx-auto"
      />
      <h2 className="text-3xl font-bold text-center mt-4">{actor.name}</h2>
      <p className="text-center mt-2">
        {actor.biography ? actor.biography.slice(0, 200) + "..." : "No biography available"}
      </p>
    </div>
  ) : (
    <p className="text-white text-center">No actor found.</p>
  );
};

export default Actorprofile;
