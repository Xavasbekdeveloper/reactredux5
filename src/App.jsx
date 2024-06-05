import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home";
import Admin from "./pages/admin";
import CreateProduct from "./pages/admin/create product/CreateProduct";
import ManageProduct from "./pages/admin/manage product/ManageProduct";
import Wishlist from "./pages/wishlist";
import Details from "./pages/details/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
        </Route>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
