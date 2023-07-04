import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useEffect, useState } from "react";
import { Context } from "./Context";

export default function App() {
  const [fotos, setFotos] = useState([]);
  const endpoint = "/fotos.json";

  const getFotos = async () => {
    const res = await fetch(endpoint)
    let { photos } = await res.json();

    const newPhotos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      desc: photo.alt,
      favorito: false,
    }));

    setFotos(newPhotos)
  };

  useEffect(() => {
    getFotos();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{fotos, setFotos}}> 
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
