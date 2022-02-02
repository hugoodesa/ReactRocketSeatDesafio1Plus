import React from "react";
import { Categoria, MenuLateral } from "../UI";

const MenuCategorias = ({ children }) => {
  return (
    <MenuLateral>
      <Categoria>
        Wath<span style={{ color: "tomato" }}>ME</span>
      </Categoria>

      {children}
    </MenuLateral>
  );
};

export default MenuCategorias;
