import MainBanner from "../../components/main-banner/MainBanner";
import ProductCardDestack from "../../components/product-card-destack/ProductCardDestack";
import NikeProducDestackImg from "../../assets/img/produtos/card-destack/tenis-nike.png";
import TshirtStarWarsImg from "../../assets/img/produtos/card-destack/star-wars-shirts.png";
import HeadsetGamerImg from "../../assets/img/produtos/card-destack/headset-gamer.png";
import style from "./Home.module.css";

function Home() {
  return (
    <>
      <MainBanner />
      <div className={style.content}>
        <ProductCardDestack title="Novo drop supreme" img={TshirtStarWarsImg} />
        <ProductCardDestack title="Coleção Adidas" img={NikeProducDestackImg} />
        <ProductCardDestack title="Novo Beats Bass" img={HeadsetGamerImg} />
      </div>
    </>
  );
}

export default Home;
