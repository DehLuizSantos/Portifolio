import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Container } from "./styles/container";
import GlobalStyles from "./styles/global";

import Header from "./template/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Home />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
