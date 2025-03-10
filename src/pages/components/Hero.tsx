import React from "react";
import { Play, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const featuredMovies = [
  {
    id: 1,
    title: "Anjaan",
    rating: 8.9,
    releaseDate: "March 1, 2014",
    description:
      "Anjaan is a 2014 Tamil-language action film. It tells the story of Krishna, who comes to Mumbai to find his brother Raju Bhai, a gangster. The film stars Suriya, Samantha Ruth Prabhu, and Vidyut Jammwal. It was written and directed by N. Lingusamy. ",
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/85/923/desktop-wallpaper-anjaan.jpg",
  },
  {
    id: 2,
    title: "Nanban",
    rating: 9.5,
    releaseDate: "January 12, 2012",
    description:
      " Nanban is a 2012 Indian Tamil-language coming-of-age comedy drama film directed by S. Shankar and produced by Gemini Film Circuit. The film stars Vijay, Srikanth, Jiiva, Sathyaraj, Ileana D'Cruz, Sathyan and Anuya, with S. J. Suryah and Vijay Vasanth in cameo appearances. It is a remake of the Rajkumar Hirani's 2009 Hindi-language film 3 Idiots, which itself is based on Chetan Bhagat's novel Five Point Someone.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWRkMjQ2ZGItZDU2Ni00NDQ3LWE4YTQtMjQ3NGU2Y2VlMzNiXkEyXkFqcGc@._V1_.jpg",
  },
];

const Hero = () => {
  const [currentMovie, setCurrentMovie] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const movie = featuredMovies[currentMovie];

  return (
    <div className="relative h-[90vh] bg-gradient-to-b from-transparent to-black">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 gradient-mask"
        style={{
          backgroundImage: `url('${movie.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-yellow-500 font-semibold">
                {movie.rating} Rating
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Calendar className="w-5 h-5 text-zinc-400" />
              <span className="text-zinc-300">{movie.releaseDate}</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">
            {movie.title}
          </h1>
          <p className="text-zinc-300 text-lg mb-8 line-clamp-3 max-w-xl">
            {movie.description}
          </p>
          <div className="flex items-center gap-4">
            <Link
              to={`/movie/${movie.id}`}
              className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-all hover:scale-105 duration-300"
            >
              <Play className="w-5 h-5" />
              Watch Trailer
            </Link>
            <Link
              to={`/movie/${movie.id}`}
              className="bg-zinc-900/80 backdrop-blur-md text-white px-8 py-3 rounded-xl font-semibold hover:bg-zinc-800 transition-all hover:scale-105 duration-300"
            >
              More Info
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-4 flex gap-2">
          {featuredMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMovie(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentMovie === index
                  ? "bg-yellow-500 w-8"
                  : "bg-zinc-600 w-4 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;