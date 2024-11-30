import ProductBadge from "../product-card/product-badge/ProductBadge";

function ProductCardDestack({ title, img }) {
  return (
    <>
      <div>
        <ProductBadge />
        <h3> {title} </h3>
        <button></button>
        <img src={img} alt="" />
      </div>
    </>
  );
}

export default ProductCardDestack;
