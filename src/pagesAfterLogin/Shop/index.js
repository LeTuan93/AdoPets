import styles from './Shop.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as searchServices from '~/apiServices/Services';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function ShopAfter() {
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

    return (
        <shop className={cx('wrapper')}>
            after login
            <div className={cx('product__list__sort')}>
                <label class="label-sort-product" for="sort-product">
                    Sort by:
                </label>
                <select id="select-sort-product" name="sort-product">
                    <option className={cx('option-sort-product')}>Relevance</option>
                    <option className={cx('option-sort-product')}>Name: A-Z</option>
                    <option className={cx('option-sort-product')}>Name: Z-A</option>
                    <option className={cx('option-sort-product')}>Price: Low to High</option>
                    <option className={cx('option-sort-product')}>Price: High to Low</option>
                </select>
            </div>
            <div className={cx('product__list')}>
                {productList &&
                    productList.length > 0 &&
                    productList.map((product) => (
                        <div className={cx('col c-6 m-4 l-3 item')} id={product.id}>
                            <a className={cx('item__product')} href={'/' + product.id}>
                                <img
                                    src={'http://103.252.95.181:8000' + product.images}
                                    alt={product.product_name}
                                    className={cx('avatar')}
                                ></img>
                            </a>
                            <div class="item__content">
                                <a className={cx('item__desc')} href={'/' + product.id}>
                                    {product.product_name}
                                </a>
                                <div className={cx('item__content__price')}>{product.price} đ</div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className={cx('product__list__page')}></div>
        </shop>
    );
}

export default ShopAfter;
