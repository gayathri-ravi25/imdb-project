import "./App.css";
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import MovieList from "./pages/MovieList.tsx";
import MovieDetails from "./pages/MovieDetails.tsx";
import Toprated from "./pages/Toprated.jsx";
import Actorprofile from "./pages/Actorprofile";  // Ensure the file is correctly named
import Reviews from "./pages/Reviews";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/top-rated" element={<Toprated />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/actor/:id" element={<Actorprofile />} /> {/* Only one actor route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
