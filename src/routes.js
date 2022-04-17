import { Routes as Switch, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";
import Compras from "./pages/Compras";
import Conta from "./pages/Conta";
import Contato from "./pages/Contato";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Pacotes from "./pages/Pacotes";
import Resumo from "./pages/Resumo";
import Sobre from "./pages/Sobre";
import Termos from "./pages/Termos";
import Viagem from "./pages/Viagem";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/cadastro" exact element={<Cadastro />} />
      <Route path="/carrinho" exact element={<Carrinho />} />
      <Route path="/checkout" exact element={<Checkout />} />
      <Route path="/compras" exact element={<Compras />} />
      <Route path="/conta" exact element={<Conta />} />
      <Route path="/contato" exact element={<Contato />} />
      <Route path="/faq" exact element={<FAQ />} />

      <Route path="/login" exact element={<Login />} />
      <Route path="/pacotes" exact element={<Pacotes />} />
      <Route path="/resumo" exact element={<Resumo />} />
      <Route path="/sobre" exact element={<Sobre />} />
      <Route path="/termos" exact element={<Termos />} />
      <Route path="/viagem" exact element={<Viagem />} />
    </Switch>
  );
};

export default Routes;
