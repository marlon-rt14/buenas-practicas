import React from "react";
import { SIZE_LIST } from "../constantes/common";

const DATA = new Array(SIZE_LIST).fill(0).map((_, index) => {
  return {
    id: index,
    name: `Product ${index}`,
  };
});

const Products = () => {
  console.log("Rendering Products");
  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {DATA.map((item) => {
          if (item.id === 20) {
            throw new Error("Error en el producto 20");
          }
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Products;
