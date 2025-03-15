function Login() {
  function doLogin() {
    const formLogin = document.getElementById("form-login");
    const formDataLogin = new FormData(formLogin);
    const data = Object.fromEntries(formDataLogin);
    console.log(data);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response));
      });
  }
  return (
    <>
      <form id="form-login">
        <div>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Senha" />
        </div>
        <div>
          <button type="button" onClick={doLogin}>
            {" "}
            Entrar{" "}
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
