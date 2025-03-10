import React from "react";
import Hero from "../components/Hero.tsx";
import { Award, Clock, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import MovieCarousel from "../components/MovieCarousel.tsx";

const Home = () => {
  const trendingMovies = [
    {
      id: 1,
      title: "Anjaan",
      rating: 8.9,
      image:
        "https://sund-images.sunnxt.com/26172/640x360_Anjaan_26172_ecae15c9-9a6b-4500-8e81-fc938c699a8b.jpg",
      year: 2014,
      genre: ["Comedy", "Romance", "Drama","Action"],
    },
    {
      id: 2,
      title: "Nanban",
      rating: 9.5,
      image:
        "https://i.pinimg.com/736x/5c/44/a9/5c44a90270144eb1862a0d55a8d4dad9.jpg",
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
      title: "priyamanavale",
      rating: 8.5,
      image:
        "https://sund-images.sunnxt.com/8546/1920x1080_Priyamanavale_8546_035ba531-9432-4d9f-ad74-827c93d914bc.jpg",
      year: 2000,
      genre: ["Action", "Romance", "Drama"],
    },
    {
      id: 5,
      title: "Imaikkaa Nodigal",
      rating: 8.7,
      image:
        "https://i.scdn.co/image/ab67616d0000b273ca041663617f8a76265824d5",
      year: 2018,
      genre: ["Crime thriller", "Drama", "Romance"],
    },
  ];

  const upcomingMovies = [
    {
      id: 6,
      title: "Amaran",
      rating: 9.1,
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/99/Amaran_%28soundtrack%29.png",
      year: 2024,
      genre: ["Action", "Romance", "Adventure"],
    },
    {
      id: 8,
      title: "Raayan",
      rating: 8.3,
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e4/Raayan_poster.jpg",
      year: 2024,
      genre: ["Action", "Adventure", "Drama"],
    },
  ];

  return (
    <div>
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: TrendingUp,
              label: "Trending",
              path: "/movies?sort=trending",
              color: "bg-yellow-500",
            },
            {
              icon: Star,
              label: "Top Rated",
              path: "/top-rated",
              color: "bg-purple-500",
            },
            {
              icon: Clock,
              label: "Coming Soon",
              path: "/coming-soon",
              color: "bg-blue-500",
            },
            {
              icon: Award,
              label: "Awards",
              path: "/awards",
              color: "bg-red-500",
            },
          ].map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className={`${category.color} p-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-70 transition-opacity`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.label}</span>
            </Link>
          ))}
        </div>
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-yellow-500" />
              Trending Now
            </h2>
            <Link to="/movies?sort=trending" className="text-yellow-500 hover:text-yellow-400">
              View All
            </Link>
          </div>
          <MovieCarousel movies={trendingMovies}/>
        </section>
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Clock className="w-6 h-6 text-yellow-500" />
              Coming Soon
            </h2>
            <Link to="/coming-soon" className="text-yellow-500 hover:text-yellow-400">
              View All
            </Link>
          </div>
          <MovieCarousel movies={upcomingMovies}/>
        </section>
      </main>
    </div>
  );
};

export default Home;