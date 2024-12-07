import ProductBadge from "../product-card/product-badge/ProductBadge";
import style from "./ProductCardDestack.module.css";

function ProductCardDestack({ title, image, discount }) {
  return (
    <>
      <div className={style.productCardDestack}>
        <ProductBadge discount={discount} />
        <h3> {title} </h3>
        <button></button>
        <img src={image} alt="" />
      </div>
    </>
  );
}

export default ProductCardDestack;
