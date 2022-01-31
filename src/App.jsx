import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import {
  ButtonGenero,
  CardFile,
  Categoria,
  Container,
  Genero,
  MenuCentral,
  MenuLateral,
} from "./Components/UI/inde";
import { fetchGenders } from "./Api/api";

function App() {
  useEffect(() => {
    const getGenders = async () => {
      const genders = await fetchGenders();
      console.log(genders);
    };

    getGenders();
  }, []);

  return (
    <Container>
      <MenuLateral>
        <Categoria>
          Wath<span style={{ color: "tomato" }}>ME</span>
        </Categoria>
        <ButtonGenero>Teste</ButtonGenero>
        <ButtonGenero>Teste</ButtonGenero>
        <ButtonGenero>Teste</ButtonGenero>
        <ButtonGenero>Teste</ButtonGenero>
        <ButtonGenero>Teste</ButtonGenero>
        <ButtonGenero>Teste</ButtonGenero>
      </MenuLateral>
      <MenuCentral>
        <Categoria>Categoria :</Categoria>
        <Genero>Ação</Genero>
        <CardFile>Teste</CardFile>
        <CardFile>Teste</CardFile>
        <CardFile>Teste</CardFile>
        <CardFile>Teste</CardFile>
        <CardFile>Teste</CardFile>
        <CardFile>Teste</CardFile>
        <CardFile>Teste</CardFile>
      </MenuCentral>
    </Container>
  );
}

export default App;
