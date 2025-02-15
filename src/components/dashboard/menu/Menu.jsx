import { NavLink } from "react-router";
import style from "./Menu.module.css";
import { productListDashboard } from "../../../router/dashboard/dashboard-routes-config";

function Menu() {
  return (
    <>
      <ul className={style.li}>
        <li>Dashboard</li>
        <li>
          <NavLink to={productListDashboard}>Produtos</NavLink>
        </li>
        <li>Client</li>
      </ul>
    </>
  );
}

export default Menu;
