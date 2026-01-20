import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages";
import { GlobalStyle } from "./styles/global";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
