import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}

export default App;
