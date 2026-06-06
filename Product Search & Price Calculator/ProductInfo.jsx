import React from "react";

function ProductInfo({
  product,
  removeProduct,
}) {
  return (
    <div className="product-card">
      <div>
        <h4>{product.name}</h4>
        <p>₹ {product.price}</p>
      </div>

      <button
        onClick={() =>
          removeProduct(product.id)
        }
      >
        Delete
      </button>
    </div>
  );
}

export default React.memo(ProductInfo);