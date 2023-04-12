import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";
import Navbar from "./components/layout/Navbar";
import { Header } from "./components/layout/Header";
import AboutUs from "./components/layout/AboutUs";
import Initial from "./components/layout/Initial";
import { Portais } from "./components/layout/Portais";
import Blog from "./components/layout/Blog";
import Galeria from "./components/layout/Galeria";
import Encomenda from "./components/layout/Encomenda";
import Contactos from "./components/layout/Contactos";
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/encomendas" element={<Encomenda />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
        <Portais />
      </Router>
    </Provider>
  );
}

export default App;
