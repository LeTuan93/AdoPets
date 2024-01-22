import styles from './Shop.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as searchServices from '~/apiServices/Services';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Shop() {


    return (
        <shop className={cx('wrapper')}>
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
            </div>
            <div className={cx('product__list__page')}></div>
        </shop>
    );
}

export default Shop;
