import "./App.css";
import Home from "./Home/home";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Search from "./search/search";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
