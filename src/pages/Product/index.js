import { useParams } from 'react-router-dom';
import * as searchServices from '~/apiServices/Services';
import { useState, useEffect } from 'react';

function Product() {
    const params = useParams();
    const [product, setProduct] = useState([]);
    const [productList, setProductList] = useState('');
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const productData = await searchServices.search();
                setProductList(productData);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchApi();
    }, []);
    console.log(productList)
    useEffect(() => {
        if (productList && productList.length > 0) {
            const filteredProduct = productList.filter((p) => ":"+String(p.id)==(params.id));
            setProduct(filteredProduct.length > 0 ? filteredProduct[0] : []);
        }
    }, [productList, params.id]);
    return (
        <div>
            <h3>{product.id} login</h3>
        </div>
    );
}

export default Product;
