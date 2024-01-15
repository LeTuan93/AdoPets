
import { useParams } from "react-router-dom";

function Product() {
    const params = useParams();
    return (
        <div>
            <h3>{params.id}</h3>
        </div>
    )
};

export default Product
