import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addproducts from "./components/Addproducts";
import Allproducts from "./components/Allproducts";
import Editproducts from "./components/Editproducts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproducts" element={<Addproducts />} />
        <Route path="/editproducts/:id" element={<Editproducts />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
