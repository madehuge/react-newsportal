import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { BrowserRouter as Routerss, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Contact from "./Pages/Contact";
import Notfound from "./Pages/Notfound";
import NewsDetails from "./Components/NewsDetail";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <>
      <Routerss>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/search" element={<SearchPage />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </Routerss>
    </>
  );
}

export default App;
