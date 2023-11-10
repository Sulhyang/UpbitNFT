import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";
import GlobalStyles from "./theme/GlobalStyles.styles";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Drops from "./pages/Drops";
import Trend from "./pages/Trend";
import MarketPlace from "./pages/Marketplace";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drops" element={<Drops />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/trend" element={<Trend />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
