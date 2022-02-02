import React from "react";
import {
  CardFile,
  CardFileCartazImagem,
  CardInformacoes,
  Sobrepor,
} from "../UI";

const ListaFilmes = ({ listaFilmes }) => {
  return listaFilmes.map((filme, index) => (
    <CardFile key={index}>
      <CardFileCartazImagem src={filme.Poster} />
      <CardInformacoes>{filme.Runtime}</CardInformacoes>
      <Sobrepor />
    </CardFile>
  ));
};

export default ListaFilmes;
