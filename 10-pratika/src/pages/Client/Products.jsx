import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/bookService";
import Loading from "../../components/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h1>Products</h1>

      {products.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price} $</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
