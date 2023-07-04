import { Context } from "../Context";
import { useContext } from "react";

export default function Favoritos() {
  const {fotos, setFotos} = useContext(Context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       {fotos
       .filter((foto) => foto.favorito)
       .map((foto) => {
        return <img src={foto.src} alt={foto.desc} key={foto.id} />
       })
       }
      </div>
    </div>
  );
}
