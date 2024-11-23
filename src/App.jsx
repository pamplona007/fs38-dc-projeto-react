import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./views/layout/Layout";
import Home from "./views/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
