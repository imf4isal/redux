import { Fragment } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <Fragment>
      <h3>Product Page</h3>
        <ul>
          <li>
            <Link to='/products/bookstore'>
              A book store
            </Link>
          </li>
          <li>
            <Link to='/products/clothstore'>
              A cloth store
            </Link>
          </li>
        </ul>
    </Fragment>
  );
};

export default Products;