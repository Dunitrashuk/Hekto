import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageHeader from "../../components/UI/PageHeader";
import ProductDetails from "./ProductDetails/ProductDetails.jsx";
import ProductDescription from "./ProductDescription/ProductDescription";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Partners from "../../components/UI/Partners";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/products?id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <PageHeader title="Product Details" />
      <section>
        {product && (
          <>
            <ProductDetails product={product} />
            <ProductDescription product={product} />
            <RelatedProducts key={product.id} category={product.category} />
          </>
        )}
        <Partners />
      </section>
    </>
  );
}

export default Product;
