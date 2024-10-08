import { ThemeProvider } from "styled-components";
import { Login } from "./pages/login/Login";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Login />
      </ThemeProvider>
    </div>
  );
}

export default App;
