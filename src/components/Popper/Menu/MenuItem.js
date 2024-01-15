import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return <Button className={cx('menu__item')} onClick={onClick} >{data.name}</Button>;

}

export default MenuItem;
