import React, { useState, FormEvent } from "react";
import { Film, Search, Menu, X, User, Star, Users } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // You can use useParams here to extract actorId if the Navbar is rendered on an actor page
  const { actorId } = useParams();  // Now actorId comes from URL parameters.

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/movies?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); // Clear input after search
    }
  };

  const navItems = [
    { label: "Movies", path: "/movies" },
    { label: "Top Rated", path: "/top-rated" },
    { label: "Coming Soon", path: "/coming-soon" },
    { label: "Actors", path: "/actors", icon: <Users className="w-4 h-4" /> },
    { label: "Reviews", path: "/reviews", icon: <Star className="w-4 h-4" /> },
    { label: "Profile", path: "/profile", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-black/70 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover-glow">
            <Film className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-bold text-glow">MovieDB</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies..."
                className="bg-zinc-900/80 backdrop-blur-md text-white pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 w-64 transition-all"
              />
            </form>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1 hover-glow"
                >
                  {item.icon && item.icon} {item.label}
                </Link>
              ))}

              {/* Actor Details and Profile Links with dynamic actorId from URL */}
              <Link
                to={`/actor/${actorId}/details`}
                className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1 hover-glow"
              >
                View Actor Details
              </Link>
              <Link
                to={`/actor/${actorId}/profile`}
                className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1 hover-glow"
              >
                View Actor Profile
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              {/* Search Bar in Mobile Menu */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-600 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search movies..."
                  className="bg-zinc-900/80 backdrop-blur-md text-white pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 w-full"
                />
              </form>

              {/* Mobile Navigation Links */}
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-zinc-300 hover:text-white transition-colors py-2 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && item.icon} {item.label}
                </Link>
              ))}

              {/* Mobile Actor Details and Profile Links */}
              <Link
                to={`/actor/${actorId}/details`}
                className="text-zinc-300 hover:text-white transition-colors py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                View Actor Details
              </Link>
              <Link
                to={`/actor/${actorId}/profile`}
                className="text-zinc-300 hover:text-white transition-colors py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                View Actor Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
