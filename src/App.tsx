import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Container } from "./styles/container";
import GlobalStyles from "./styles/global";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./template/Footer";
import Header from "./template/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Header />
            <Container>
              <Route path="/Home" component={Header} />
            </Container>
            <Footer />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
