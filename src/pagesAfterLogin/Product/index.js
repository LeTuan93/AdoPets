import { useParams } from 'react-router-dom';
import * as searchServices from '~/apiServices/Services';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function ProductAfter() {
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
    console.log(productList);
    useEffect(() => {
        if (productList && productList.length > 0) {
            const filteredProduct = productList.filter((p) => String(p.id) == params.id);
            setProduct(filteredProduct.length > 0 ? filteredProduct[0] : []);
        }
    }, [productList, params.id]);
    console.log('http://103.252.95.181:8000' + product.images);
    return (
        <div className={cx('item__container')}>
            <img
                src={'http://103.252.95.181:8000' + product.images}
                alt={product.product_name}
                className={cx('avatar')}
            ></img>
            <div className={cx('item__container__content', 'col', 'c-6', 'mb-12')}>
                <div className={cx('item__container__title')}>{product.product_name}</div>
                <div className={cx('item__container__price')}>{product.price} đ</div>
                <div className={cx('item__container__button')}>
                    <div className={cx('item__container__button__buy', 'item__container__button--button')}>Buy Now</div>
                    <div className={cx('item__container__button__add', 'item__container__button--button')}>
                        Add to Cart
                    </div>
                </div>
                <div className={cx('item__container__info--wrap')}>
                    <div className={cx('item__container__info')}>Thông tin sản phẩm</div>
                </div>
                <div className={cx('item__container__desc')}>{product.description}</div>
            </div>
        </div>
    );
}

export default ProductAfter;
