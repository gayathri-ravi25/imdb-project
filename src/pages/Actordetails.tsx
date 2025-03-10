import { div } from "framer-motion/client";
import { Award, Instagram, Star} from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";

const Actordetails = () => {
  const actors = [
    {
      id: 1,
      name: "Suriya",
      birthDate: "23 July 1975",
      birthPlace: "Madras, Tamil Nadu, India ",
      nationality: " Indian citizen",
      height: "1.68 m (5/6)",
      biography:
        "He primarily works in Tamil cinema, where he is one of the highest-paid actors. Considered one of the finest actors of Indian cinema, Suriya has received numerous accolades including two National Film Awards, six Filmfare Awards South and five Tamil Nadu State Film Awards.",
      image:
        "https://wallpapersok.com/images/high/surya-rubbing-his-neck-hd-erarnev90yw7ghfj.jpg",
      coverImage:
        "https://i.pinimg.com/736x/31/ca/f2/31caf2fa888d01cd7658ed5d41a5798a.jpg",
      awards: [
        {
          name: "National film awards",
          year: 2022,
          category: "Best Actor",
          film: "soorarai pottru",
        },
        {
          name: "SIMA awards",
          year: 2021,
          category: "Best Actor - Leading Role",
          film: "soorarai pottru",
        },
        {
          name: "Vijay awards",
          year: 2011,
          category: "Entertainer of the Year",
          film: "Singam",
        },
      ],
      socialMedia: {
        instagram: "https://www.instagram.com/actorsuriya/",
        imdb: "https://www.imdb.com/name/nm1421814/",
      },
      knownFor: [
        {
          id: 1,
          title: "kaakha kaakha",
          role: "Anbu selvan IPS",
          year: 2003,
          rating: 8.9,
          image:
            "https://m.media-amazon.com/images/M/MV5BYzkwMjU5NWUtM2QwNi00NmI1LWJiZmMtMjA1MWFhZjk5YmUyXkEyXkFqcGc@._V1_.jpg",
        },
        {
          id: 2,
          title: "soorarai pottru",
          role: "Nedumaaran Rajangam (Maara) ",
          year: 2020,
          rating: 8.7,
          image:
            "https://i.scdn.co/image/ab67616d0000b273f06fc429c88fd58835de00ec",
        },
        {
          id: 3,
          title: "vel",
          role: "vel",
          year: 2007,
          rating: 8.0,
          image:
            "https://assets-in.bmscdn.com/discovery-catalog/events/et00000399-pbjpruzmmf-landscape.jpg",
        },
      ],
      stats: {
        moviesCount: 43,
        totalAwards: 12,
        avgRating: 8.4,
        yearsActive: "2025-present",
      },
      upcomingProjects: [
        {
          title: "Irumbu kai mayavi",
          role: "surya",
          status: "Pre-production",
          expectedRelease: "2026",
        },
      ],
    },
    {
      id: 2,
      name: " Joseph Vijay",
      birthDate: "22 June 1974",
      birthPlace: "Madras, Tamil Nadu. ",
      nationality: "Indian",
      height: "5'7 to 5'8",
      biography:
        "Born in Madras to director S. A. Chandrasekhar, Vijay made his debut as a child actor in the Tamil film Vetri (1984). After a few roles as a child actor in his father's films, he played his first lead role in the film Naalaiya Theerpu (1992) at the age of 18.",
      image:
        "https://images.filmibeat.com/img/popcorn/profile_photos/vijay-20220622092431-662.jpg",
      coverImage:
        "https://static.tnn.in/thumb/msid-107352107,thumbsize-49516,width-448,height-252,resizemode-75/107352107.jpg",
      awards: [
        {
          name: "Vijay awards",
          year: 2015,
          category: "Entertainer of the year",
          film: "Kathi",
        },
        {
          name: "Vijay awards",
          year: 2018,
          category: "Favorite hero",
          film: "Mersal",
        },
      ],
      socialMedia: {
        instagram: "https://www.instagram.com/actorvijay/?hl=en",
        imdb: "https://www.imdb.com/name/nm0897201/",
      },
      knownFor: [
        {
          id: 1,
          title: "Leo",
          role: "Leo das",
          year: 2023,
          rating: 7.2,
          image:
            "https://images.news18.com/ibnlive/uploads/2023/10/leo-movie-review-vijay-film-2023-10-1e2b26eca663a1c07de3b347b2db49db.jpg",
        },
        {
          id: 4,
          title: "GOAT",
          role: "jeevan,gandhi",
          year: 2024,
          rating: 8.2,
          image:
            "https://static.toiimg.com/thumb/msid-112527716,width-1280,height-720,resizemode-4/112527716.jpg",
        },
      ],
      stats: {
        moviesCount: 69,
        totalAwards: 39,
        avgRating: 8.9,
        yearsActive: "2025-present",
      },
      upcomingProjects: [
        {
          title: "jana nayagan",
          role: "vijay",
          status: "Post-production",
          expectedRelease: "2025",
        },
      ],
    },
  ];
  const { id } = useParams();
  const actor = actors.find((m) => m.id === Number(id)) || actors[0];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${actor.knownFor[0].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80" />
        </div>
        <div className="relative h-full container flex items-end pb-8">
          <div className="flex items-end gap-8">
            <img
              src={actor.image}
              alt={actor.name}
              className="w-48 h-48 rounded-xl object-cover border-4 border-gray-900"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4">{actor.name}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>{actor.stats.avgRating} Average Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span>{actor.stats.totalAwards} Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="sticky top-24 space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="font-semibold mb-4">Personal Info</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-400">Born</dt>
                  <dd>{actor.birthDate}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Place of Birth</dt>
                  <dd>{actor.birthPlace}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Movies</dt>
                  <dd>{actor.stats.moviesCount} titles</dd>
                </div>
              </dl>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="font-semibold mb-4">Social Media</h2>
              <div className="flex gap-4">
                <a
                  href={actor.socialMedia.instagram}
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Biography</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {actor.biography}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Awards & Nominations</h2>
            <div className="grid gap-4">
              {actor.awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl"
                >
                  <Award className="w-5 h-5 text-yellow-500" />
                  <div>
                    <span className="font-semibold">{award.name}</span>
                    <span className="mx-2">|</span>
                    <span>{award.year}</span>
                    <p className="text-sm text-gray-400">
                      {award.category} - {award.film}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Known For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {actor.knownFor.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <div className="relative aspect-[2/3]">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-black/60 px-2 py-1 rounded-md flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-yellow-500 font-medium">
                          {movie.rating}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">
                        {movie.title}
                      </h3>
                      <p className="text-gray-400">as {movie.role}</p>
                      <p className="text-gray-500 text-sm">{movie.year}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Actordetails;