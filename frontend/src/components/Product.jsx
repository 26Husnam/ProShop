// import React from 'react';
// import { Card } from 'react-bootstrap';

// const Product = ({product}) => {
//   return (
//     <Card>
//         <a href={`/product/${product._id}`}>
//             <Card.Img src={product.image} variant='top' />
//         </a>

//         <Card.Body>
//             <a href='{`/product/${product._id}`}'>
//                 <Card.Title as="div">
//                     <strong>{product.name}</strong>
//                 </Card.Title>
//             </a>

//             <Card.Text as="h3">${product.price}</Card.Text>

//         </Card.Body>
//     </Card>
//   )
// }

// export default Product

import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card>
      {/* Corrected href to use dynamic link */}
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body>
        {/* Corrected href by removing single quotes around template literal */}
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
