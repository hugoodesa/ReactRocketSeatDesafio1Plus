import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  height: 664px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const MenuLateral = styled.div`
  background-color: #252222;
  height: 100%;
  width: 25%;
  flex-direction: column;
  align-items: baseline;
  align-content: space-between;
`;

export const ButtonGenero = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #615b5b;
  color: white;
  font-weight: lighter;
  text-align: center;
  padding: 20px;
  width: 90%;
  margin: 10px;
  border: none;
  border-radius: 5px;
  &:hover {
    color: yellow;
    cursor: pointer;
  }
`;

export const Categoria = styled.h1`
  color: #cac9c6;
  font-weight: 300;
  display: inline-flex;
  box-sizing: border-box;
  margin-left: 20px;
`;

export const Genero = styled.h1`
  color: white;
  font-weight: bold;
  display: inline-flex;
  width: 70%;
  box-sizing: border-box;
  margin-left: 10px;
`;

export const MenuCentral = styled.div`
  background-color: #474040;
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  border: solid 1px red;
`;

export const CardFile = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-weight: lighter;
  text-align: center;
  width: 15%;
  height: 35%;
  align-items: center;
  justify-content: center;
  margin: 20px;
  position: relative;
`;

export const CardFileCartaz = styled.div`
  height: 80%;
  width: 100%;
  flex-direction: column;
`;

export const CardFileCartazImagem = styled.img`
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const Sobrepor = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  margin-top: -280px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ff634736;
    cursor: pointer;
  }
`;

export const CardInformacoes = styled.div`
  height: 19%;
  width: 100%;
  flex-direction: column;
  background-color: tomato;
  color: white;
  display: inline-flex;
  justify-content: center;
  &:hover {
    background-color: #fa5133;
  }
`;
