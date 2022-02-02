import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Container } from "./styles/container";
import GlobalStyles from "./styles/global";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./template/Footer";
import Header from "./template/Header";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Container>
              <Route path="/Home" component={Home} />
            </Container>
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
