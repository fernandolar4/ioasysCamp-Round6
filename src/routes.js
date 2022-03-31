import { Routes as Switch, Route } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";
import Compras from "./pages/Compras";
import Conta from "./pages/Conta";
import Contato from "./pages/Contato";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import InfoPagamento from "./pages/InfoPagamento";
import InfoPessoal from "./pages/InfoPessoal";
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
      <Route path="/login" exact element={<Login />} />
      <Route path="/pacotes" exact element={<Pacotes />} />
      <Route path="/viagem" exact element={<Viagem />} />
      <Route path="/checkout" exact element={<Checkout />} />
      <Route path="/resumo" exact element={<Resumo />} />
      <Route path="/carrinho" exact element={<Carrinho />} />
      <Route path="/contato" exact element={<Contato />} />
      <Route path="/sobre" exact element={<Sobre />} />
      <Route path="/faq" exact element={<FAQ />} />
      <Route path="/termos" exact element={<Termos />} />
      <Route path="/conta" exact element={<Conta />} />
      <Route path="/infopessoal" exact element={<InfoPessoal />} />
      <Route path="/infopagamento" exact element={<InfoPagamento />} />
      <Route path="/compras" exact element={<Compras />} />
    </Switch>
  );
};

export default Routes;
