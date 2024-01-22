import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import styles from './ItemSearch.module.scss';
import {Link} from 'react-router-dom';
import {Product} from '~/pages/Product'

const cx = classNames.bind(styles);

function ItemSearch({ data }) {
    return (
        <Link  to={"/"+data.id} className={cx('wrapper')} >
            <Image 
                className={cx('avatar')} 
                src={"http://103.252.95.181:8000"+data.images} 
                alt= {data.product_name} 
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.product_name}</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('detail')}>{data.description}</span>
            </div>
        </Link>
    );
}

export default ItemSearch;
