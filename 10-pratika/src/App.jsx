import { Routes, Route } from "react-router-dom";
import ClientLayout from "./layout/Client";
import AdminLayout from "./layout/Admin";
import Home from "./pages/Client/Home";
import Products from "./pages/Client/Products";
import AdminProducts from "./pages/Admin/Products";

function App() {
  return (
    <> <Routes>

      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/admin/products" element={<AdminProducts />} />
      </Route>

    </Routes></>
  );
}

export default App;
