import React from "react";
import { ButtonGenero } from "../UI";

const ListaCategorias = ({ categorias, setCategoriaAtivada }) => {
  return categorias.map((genero, index) => (
    <ButtonGenero
      key={index}
      onClick={() =>
        setCategoriaAtivada({ id: genero.id, titulo: genero.title })
      }
    >
      {genero.title}
    </ButtonGenero>
  ));
};

export default ListaCategorias;
