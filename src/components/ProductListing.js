import React, { useEffect } from "react";
import useCentralStore from "../app/centralStore";

const ProductListing = () => {
  const { products, getProducts, isLoading } = useCentralStore((state) => ({
    products: state.products,
    getProducts: state.getProducts,
    isLoading: state.isLoading,
  }));
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      {isLoading ? (
        <h1>Please wait while we fetch products for you... </h1>
      ) : (
        <h1>Products available: </h1>
      )}
      <div className="product-cards-wrapper">
        {products?.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img
                className="product-card__image"
                src={product?.image}
                alt={`${product?.title}`}
              />
              <span className="product-card__content">
                <p className="product-card__title text-dark">
                  {product?.title}
                </p>
                <p className="product-card__description text-dark">
                  {product?.description}
                </p>
                <p className="product-card__price text-dark">
                  ${product?.price}
                </p>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductListing;
