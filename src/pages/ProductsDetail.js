import { useParams } from "react-router-dom";

const ProductsDetail = () => {
    const params = useParams();

   return <h3>{params.id}</h3>
}

export default ProductsDetail;