import {
    Award,
    BarChart3,
    Calendar,
    Clock,
    DollarSign,
    Globe,
    Heart,
    Play,
    Share2,
    Star,
  } from "lucide-react";
  import React from "react";
  import { Link, useParams } from "react-router-dom";
  
  const MovieDetails = () => {
    const Movies = [
      {
        id: 1,
        title: "Anjaan",
        rating: 8.1,
        year: 2014,
        duration: "2hr 46mins",
        genre: ["Comedy", "Romance", "Drama","Action"],
        director: "N. Lingusamy ",
        description:
          " Anjaan is a 2014 Indian Tamil-language action film[2] written and directed by N. Lingusamy and produced under his banner Thirupathi Brothers and distributed by UTV Motion Pictures. The film stars Suriya in the lead role alongside Samantha Ruth Prabhu and Vidyut Jammwal. Manoj Bajpayee, Dalip Tahil, Murali Sharma, Joe Malloori, Soori, Chetan Hansraj, Sanjana Singh and Asif Basra play supporting roles. The film follows a man who arrives in Mumbai looking for his elder gangster brother and learns of the events behind his disappearance. ",
        image:
          "https://static.toiimg.com/thumb/imgsize-73634,msid-102832703,width-375,height-210,resizemode-75/102832703.jpg",
        backdrop:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjApGpuVv_AeDfBNsysgDZJG3JSwcy1T6xC7lWVs5j0s9GEFmFuN0ilaAfTfUkjBFBU1NxhuoxUb7SIIkuK2nRUlkmSIPMIzku9T75PwOzpvT94eUDjLETQTZeZduGQkb9XPz6ZF5mjsM8/s1600/Anjaan+1.jpg",
        cast: [
          {
            id: 1,
            name: "Suriya",
            role: "Raju Bai",
            image:
              "https://i.pinimg.com/236x/15/f0/67/15f067b7b9ea7b1b2c272ad4368bcec1.jpg",
            bio: "Rising star known for his compelling performances",
          },
          {
            id: 2,
            name: "Samantha",
            role: "Jeeva",
            image:
              "https://i.pinimg.com/474x/f7/66/73/f76673bc88ab6ea42179e84657dd126d.jpg",
            bio: "Multi-talented actress and fashion icon",
          },
        ],
        trailer: "https://www.google.com/search?sca_esv=5d466d0b992978df&q=anjaan+movie+trailer&udm=7&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBs5KbvfUChveCKqCmofFTOmD6-uRqIJSzI7SBoU243xFMltE1fE7EvUxb3MlHAu1Ire0CeSJpajH4rs8N3GMsCyGXdTzP66FuIFWwPnbSYJy_3u6e1SUtQa_G3p_TrIdANpAKhJ8y4xZsvOlzANeij-iq4rTnpfJOOg9P7a_9M_blpCcdw&sa=X&ved=2ahUKEwiz2YH72eGLAxXnSmwGHUVzO84QtKgLegQIEBAB&biw=1366&bih=641&dpr=1#fpstate=ive&vld=cid:986fc5f6,vid:MJxEQPMh_io,st:0",
        awards: ["South Indian International Movie Awards"],
        boxOffice: "2,44,51,375",
        language: "Tamil,telungu",
        productionCompany: "Thirrupathi Brothers",
        releaseDate: "2014-10-15",
        metacriticScore: 81,
        rottenTomatoesScore: 94,
      },
      {
        id: 2,
        title: "Nanban",
        rating: 9.5,
        year: 2012,
        duration: "2hr 60mins",
        genre: ["comedy", "Romance", "Drama"],
        director: "Shankar",
        description:
          "Nanban  is a 2012 Indian Tamil-language coming-of-age comedy drama film directed by S. Shankar and produced by Gemini Film Circuit. The film stars Vijay, Srikanth, Jiiva, Sathyaraj, Ileana D'Cruz, Sathyan and Anuya, with S. J. Suryah and Vijay Vasanth in cameo appearances.",
        image:
          "https://images.filmibeat.com/ph-big/2012/01/nanban_132583394812.jpg",
        backdrop:
          "https://i.pinimg.com/736x/18/0d/52/180d52a1e169e039306db94f5b10bd2d.jpg",
        cast: [
          {
            id: 3,
            name: "Joseph vijay",
            role: "Kosaksi Pasapugazh ",
            image:
              "https://i.pinimg.com/originals/94/21/14/9421144c1de4cf39a26520903a8dfe69.jpg",
            bio: "Versatile actor known for intense performances",
          },
          {
            id: 4,
            name: "Ilena D'Cruz",
            role: "Riya",
            image:
              "https://i.pinimg.com/474x/a7/f6/c2/a7f6c2e85f37d3809cab0194ab40e28b.jpg",
            bio: "Acclaimed actress with numerous awards",
          },
        ],
        trailer: "https://www.youtube.com/watch?v=Byw2dOCkc6o",
        awards: ["Academy Award Winner", "BAFTA Winner", "Golden Globe Winner"],
        boxOffice: "35.00C",
        language: "Tamil",
        productionCompany: "Gemini Film Circuit",
        releaseDate: "2012-01-12",
        metacriticScore: 89,
        rottenTomatoesScore: 93,
      },
      {
        id: 3,
        title: "Gilli",
        rating: 8.9,
        year: 2023,
        duration: "2hr 47mins",
        genre: ["Action", "Drama", "Romance"],
        director: "Dharani",
        description:
          "The film is about a Kabaddi player, who goes to Madurai to participate in an exhibition match, but instead rescues a woman from a gang leader, who wants to marry her. The soundtrack album and score were composed by Vidyasagar, while cinematography was handled by Gopinath and editing by V. T. Vijayan and B. Lenin. ",
        image:
          "https://dumbscripter.wordpress.com/wp-content/uploads/2020/06/ghilli.png?w=640",
        backdrop:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQH6_HBmOvaX6Ma14cAhEPu-S0POQfuYA6sw&s",
        cast: [
          {
            id: 5,
            name: "Thalapathy vijay",
            role: "saravanavel",
            image:
              "https://i.pinimg.com/736x/24/19/62/241962da45118e1cc2115ff113fc6235.jpg",
            bio: "He has been called Thalapathy",
          },
          {
            id: 6,
            name: "Prakash raj",
            role: "Muthupandi",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIC7uprqYuz9DUysUoi2_kuZhX7w-a5NNHLg&s",
            bio: "Legendary actor with diverse roles",
          },
        ],
        trailer: "https://www.youtube.com/watch?v=4hGft6ZCApg",
        awards: ["Filmfare Awards South"],
        boxOffice: "50.56C",
        language: "Tamil",
        productionCompany: "Sri surya films",
        releaseDate: "2004-04-17",
        metacriticScore: 87,
        rottenTomatoesScore: 92,
      },
      {
        id: 4,
        title: "Priyamanavale",
        rating: 8.5,
        year: 2000,
        duration: "2hr 40mins",
        genre: ["Drama", "Romance", "Action"],
        director: "K.Selva bharathi",
        description:
          "Vijay has no faith in marriage. However, on his father's insistence, he marries Priya but lays down a condition wherein at the end of the year he will decide whether to continue their marriage or not.",
        image:
          "https://sund-images.sunnxt.com/8546/1920x1080_Priyamanavale_8546_035ba531-9432-4d9f-ad74-827c93d914bc.jpg",
        backdrop:
          "https://m.media-amazon.com/images/M/MV5BMzQ4ZTBmYmItMzM2Ny00MTFkLTlkOTItODlhNTc4MjlhZWE2XkEyXkFqcGc@._V1_.jpg",
        cast: [
          {
            id: 7,
            name: "Thalapathy vijay",
            role: "vijay",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYlxNOo6DYkTRxSIkuseUfnw-0m0jL9SpUsFmD-WWoGnarZGyEd7iDMcsT-r_CpkFefM&usqp=CAU",
            bio: "india's finest actor",
          },
          {
            id: 8,
            name: "Simran",
            role: "priya",
            image:
              "https://i.pinimg.com/474x/f9/3d/f9/f93df9ccf8ad26fa29741dd105afd141.jpg",
            bio: "prominent Indian actress",
          },
        ],
        trailer: "https://www.youtube.com/watch?v=OjCks-mOeoQ",
        awards: ["Academy Award Winner", "Cannes Film Festival Winner"],
        boxOffice: "$18.55C",
        language: "Tamil",
        productionCompany: "Gita Chitra International",
        releaseDate: "2000-10-26",
        metacriticScore: 94,
        rottenTomatoesScore: 91,
      },
    ];
    const { id } = useParams();
    const movie = Movies.find((m) => m.id === Number(id)) || Movies[0];
    return (
      <div>
        <div className="relative h-[90vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${movie.backdrop || movie.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80" />
          </div>
  
          <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
            <div className="grid md:grid-cols-3 gap-8 items-end">
              <div className="hidden md:block">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="rounded-lg shadow-xl aspect-[2/3] object-cover"
                />
              </div>
  
              <div className="md:col-span-2">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-yellow-500 font-semibold">
                      {movie.rating} Rating
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">{movie.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">{movie.releaseDate}</span>
                  </div>
                </div>
  
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {movie.title}
                </h1>
  
                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.genre.map((g) => (
                    <span
                      key={g}
                      className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full text-sm"
                    >
                      {g}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={movie.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    Watch Trailer
                  </a>
                  <button className="bg-gray-800/80 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Add to Watchlist
                  </button>
                  <button className="bg-gray-800/80 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {movie.description}
                </p>
              </section>
  
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Awards & Recognition</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {movie.awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg"
                    >
                      <Award className="w-5 h-5 text-yellow-500" />
                      <span>{award}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-green-500" />
                    <span>Metacritic: {movie.metacriticScore}/100</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-red-500" />
                    <span>Rotten Tomatoes: {movie.rottenTomatoesScore}%</span>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-6">Top Cast</h2>
                <div className="grid grid-cols-2 gap-6">
                  {movie.cast.map((actor) => (
                    <Link
                      key={actor.id}
                      to={`/actor/${actor.id}`}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-700/50 transition-colors flex gap-4"
                    >
                      <img
                        src={actor.image}
                        alt={actor.name}
                        className="w-24 h-24 rounded-xl object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {actor.name}
                        </h3>
                        <p className="text-gray-400 mb-2">{actor.role}</p>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {actor.bio}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
  
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Movie Info</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-gray-400">Director</dt>
                      <dd>{movie.director}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-400">Production Company</dt>
                      <dd>{movie.productionCompany}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <dt className="text-gray-400">Box Office</dt>
                      <dd className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-green-500" />
                        {movie.boxOffice}
                      </dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <dt className="text-gray-400">Language</dt>
                      <dd className="flex items-center gap-1">
                        <Globe className="w-4 h-4 text-blue-500" />
                        {movie.language}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default MovieDetails;