import { NavLink } from "react-router";
import style from "./Menu.module.css";
import {
  productListDashboard,
  homeDashboard,
} from "../../../router/dashboard/dashboard-routes-config";

function Menu() {
  return (
    <>
      <ul className={style.li}>
        <li>
          <NavLink to={homeDashboard}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={productListDashboard}>Produtos</NavLink>
        </li>
        <li>Client</li>
      </ul>
    </>
  );
}

export default Menu;
