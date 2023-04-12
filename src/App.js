import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";
import Navbar from "./components/layout/Navbar";
import { Header } from "./components/layout/Header";
import AboutUs from "./components/Aboutus/AboutUs";
import Initial from "./components/inicio/Initial";
import { Portais } from "./components/layout/Portais";
import Blog from "./components/blog/Blog";
import Galeria from "./components/galeria/Galeria";
import Email from "./components/encomendas/Email";
import Contactos from "./components/contactos/Contactos";
import { ScrollToTop } from "./components/layout/ScrollToTop";
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route
            path="/encomendas"
            element={
              <Email
                title="Faça a sua encomenda!"
                content="Encomenda"
                bg={"primary"}
              />
            }
          />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
        <Portais />
      </Router>
    </Provider>
  );
}

export default App;
