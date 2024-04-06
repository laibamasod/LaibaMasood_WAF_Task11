import React from 'react';

function NewProducts({ productData }) {
  console.log(productData);

  return (
    <div>
    {productData && (
      <> 
        <h2>{productData.title}</h2>
        <p>{productData.description}</p>
      </>
    )}
  </div>
  );
}

export default NewProducts;
