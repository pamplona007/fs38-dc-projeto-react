import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
