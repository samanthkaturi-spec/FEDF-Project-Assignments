import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

import ProductInfo from "./ProductInfo";

function ProductDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 1000 },
    { id: 3, name: "Charger", price: 3200 },
  ]);

  const [productName, setProductName] =
    useState("");

  const [productPrice, setProductPrice] =
    useState("");

  const productRef = useRef(null);

  useEffect(() => {
    productRef.current.focus();
  }, []);

  useEffect(() => {
    document.title = `Products: ${products.length}`;
  }, [products]);

  const addProduct = () => {
    if (
      !productName ||
      !productPrice
    )
      return;

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: Number(productPrice),
    };

    setProducts((prev) => [
      ...prev,
      newProduct,
    ]);

    setProductName("");
    setProductPrice("");
  };

  const removeProduct = useCallback((id) => {
    setProducts((prev) =>
      prev.filter(
        (product) => product.id !== id
      )
    );
  }, []);

  const totalPrice = useMemo(() => {
    return products.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }, [products]);

  return (
    <div className="container">
      <h1>
        Product Search & Price Calculator
      </h1>

      <div className="input-box">
        <input
          ref={productRef}
          placeholder="Product Name"
          value={productName}
          onChange={(e) =>
            setProductName(e.target.value)
          }
        />

        <input
          placeholder="Price"
          value={productPrice}
          onChange={(e) =>
            setProductPrice(e.target.value)
          }
        />

        <button onClick={addProduct}>
          Add Product
        </button>

        <button
          onClick={() =>
            productRef.current.focus()
          }
        >
          Focus Input
        </button>
      </div>

      <div className="summary">
        <h3>
          Total Products: {products.length}
        </h3>

        <h3>
          Total Price: ₹ {totalPrice}
        </h3>
      </div>

      {products.map((product) => (
        <ProductInfo
          key={product.id}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
}

export default ProductDashboard;