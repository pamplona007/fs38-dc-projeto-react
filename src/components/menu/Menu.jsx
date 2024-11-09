import { useState } from "react";
import style from "./Menu.module.css";

function Menu() {
  const [itemIndex, setItemIndex] = useState(null);
  const menuItens = ["Home", "Produtos", "Categorias", "Meus pedidos"];

  function handleClick(index) {
    setItemIndex(index);
  }

  return (
    <>
      <ul className={style.menu}>
        {menuItens.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={index === itemIndex ? `${style.active}` : style.item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
