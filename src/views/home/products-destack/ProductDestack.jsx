import ProductCardDestack from "../../../components/product-card-destack/ProductCardDestack";

import NikeProducDestackImg from "../../../assets/img/produtos/card-destack/tenis-nike.png";
import TshirtStarWarsImg from "../../../assets/img/produtos/card-destack/star-wars-shirts.png";
import HeadsetGamerImg from "../../../assets/img/produtos/card-destack/headset-gamer.png";

function ProductDestack() {
  const productsDestack = [
    { title: "Novo drop supreme", image: TshirtStarWarsImg, discount: 30 },
    { title: "Coleção Adidas", image: NikeProducDestackImg, discount: 50 },
    { title: "Novo Beats Bass", image: HeadsetGamerImg, discount: 60 },
  ];

  return (
    <>
      {productsDestack.map((product, index) => (
        <ProductCardDestack
          key={index}
          title={product.title}
          image={product.image}
          discount={product.discount}
        />
      ))}
    </>
  );
}

export default ProductDestack;
