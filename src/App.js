import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Tabs from "./components/sections/Tabs";
//import Header from "./components/header/Header";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="Content">
            <Header />
            <Banner />
            {/* <Cards props={cardArray} /> */}

            <Tabs />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
