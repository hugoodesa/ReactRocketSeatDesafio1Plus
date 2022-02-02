import React, { useEffect, useState } from "react";
import "./App.css";
import { Categoria, Container, Genero, MenuCentral } from "./Components/UI";
import { fetchGenders, fetchMovies } from "./Api/api";
import MenuCategorias from "./Components/MenuCategorias";
import ListaCategorias from "./Components/ListaCategorias";
import ListaFilmes from "./Components/ListaFilmes";

function App() {
  const [generos, setGeneros] = useState([]);

  const [generosSelecionado, setGeneroSelecionado] = useState({
    id: 1,
    titulo: "",
  });

  const [filmes, setFilmes] = useState([]);

  //get generos
  useEffect(() => {
    const getGenders = async () => {
      const genders = await fetchGenders();

      setGeneros(genders);
      setGeneroSelecionado({ id: genders[0].id, titulo: genders[0].title });
    };

    getGenders();
  }, []);

  //get filmes
  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies(generosSelecionado.id);

      setFilmes(movies);

      console.log(generosSelecionado.id);
    };

    getMovies();
  }, [generosSelecionado]);

  return (
    <Container>
      <MenuCategorias>
        <ListaCategorias
          categorias={generos}
          setCategoriaAtivada={setGeneroSelecionado}
        />
      </MenuCategorias>

      <MenuCentral>
        <Categoria>Categoria :</Categoria>
        <Genero>{generosSelecionado.titulo}</Genero>

        <ListaFilmes listaFilmes={filmes} />
      </MenuCentral>
    </Container>
  );
}

export default App;
