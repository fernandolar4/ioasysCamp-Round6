import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ScrollToTop />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
