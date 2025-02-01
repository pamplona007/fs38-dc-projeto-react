import "./Home.css";
function Home() {
  const addProduct = () => {
    const formProduct = document.forms[0];
    const formData = new FormData(formProduct);
    const product = Object.fromEntries(formData);
    console.log(product);
    createProduc(product);
  };

  const createProduc = (product) => {
    fetch("", {
      method: "post",
      body: JSON.stringify(product),
    });
  };

  return (
    <>
      <form id="form-product">
        <div className="form-controller row">
          <label htmlFor="product_name">Nome do produdo</label>
          <input type="text" name="product_name" />
        </div>
        <div className="form-controller row">
          <label htmlFor="product_name">Marca</label>
          <input type="text" name="brand" />
        </div>
        <div className="form-controller row">
          <label htmlFor="product_name">Descrição</label>
          <input type="text" name="description" />
        </div>
        <div className="form-controller row">
          <label htmlFor="product_name">Quantidade</label>
          <input type="text" name="quantity" />
        </div>
        <button type="button" onClick={addProduct}>
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default Home;
