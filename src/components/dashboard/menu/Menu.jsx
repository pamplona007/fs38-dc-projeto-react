import style from "./Menu.module.css";

function Menu() {
  return (
    <>
      <ul className={style.li}>
        <li>Dashboard</li>
        <li>Produtos</li>
        <li>Client</li>
      </ul>
    </>
  );
}

export default Menu;
