import { Search, SlidersHorizontal, Star } from "lucide-react";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const MovieList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const Movies = [
    {
      id: 1,
      title: "Anjaan",
      rating: 8.9,
      image:
        "https://static.toiimg.com/thumb/imgsize-73634,msid-102832703,width-375,height-210,resizemode-75/102832703.jpg",
      year: 2014,
      genre: ["Comedy", "Romance", "Drama","Action"],
    },
    {
      id: 2,
      title: "Nanban",
      rating: 9.5,
      image:
        "https://images.filmibeat.com/ph-big/2012/01/nanban_132583394812.jpg",
      year: 2012,
      genre: ["Comedy", "Drama", "Romance"],
    },
    {
      id: 3,
      title: "Gilli",
      rating: 8.9,
      image:
        "https://dumbscripter.wordpress.com/wp-content/uploads/2020/06/ghilli.png?w=640",
      year: 2004,
      genre: ["Action", "MeloDrama", "Sports","Romance"],
    },
    {
      id: 4,
      title: "Priyamanavale",
      rating: 8.5,
      image:
        "https://sund-images.sunnxt.com/8546/1920x1080_Priyamanavale_8546_035ba531-9432-4d9f-ad74-827c93d914bc.jpg",
      year: 2000,
      genre: ["Action", "Romance", "Drama"],
    },
    {
      id: 5,
      title: "Imaikka Nodigal",
      rating: 8.7,
      image:
        "https://i.scdn.co/image/ab67616d0000b273ca041663617f8a76265824d5",
      year: 2018,
      genre: ["Crime thriller", "Drama", "Romance"],
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {search ? `Search Results for "${search}` : "Popular Movies"}
        </h1>
        <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-900 transition-colors">
          <SlidersHorizontal /> Filters
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative aspect-video">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-yellow-500 font-medium">
                    {movie.rating}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold justify-betwen mb-2">
                  {movie.title}
                </h2>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">{movie.year}</span>
                  <div className="flex gap-2">
                    {movie.genre.slice(0, 2).map((g) => (
                      <span key={g} className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-300">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;