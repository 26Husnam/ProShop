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
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card>
      {/* Corrected href to use dynamic link */}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        {/* Corrected href by removing single quotes around template literal */}
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
