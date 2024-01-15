import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faArrowRightFromBracket,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import routesConfig from "~/config/routes";
import Button from '~/components/Button';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ItemSearch from '../ItemSearch';
import Menu from '~/components/Popper/Menu';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import {Globe, Moon} from '~/components/Icons';
import Search from '../Search';
import {Link} from 'react-router-dom'
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        name: 'Tiếng Việt',
        code: 'vi',
    },
    {
        name: 'Tiếng Anh',
        code: 'en',
    },
    {
        name: 'Tiếng Pháp',
        code: 'fr',
    },
    {
        name: 'Tiếng Trung',
        code: 'cn',
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const currentUser = false;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner__top')}>
                <div className={cx('inner__top__left')}>
                    <div className={cx('mail')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className={cx('info')}>petsla.vn@gmail.com</span>
                    </div>
                    <div className={cx('divide')}></div>
                    <div className={cx('phone')}>
                        <FontAwesomeIcon icon={faPhone} />
                        <span className={cx('info')}>0369 288 612</span>
                    </div>
                </div>
                {currentUser ? (
                    <div className={cx('inner__top__right')}>
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <div className={cx('language')}>
                                <Button className={'more_button'}>
                                    <Globe />
                                </Button>
                            </div>
                        </Menu>
                        <div className={cx('theme')}>
                            <Moon />
                        </div>
                        <div className={cx('auth')}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        </div>
                    </div>
                ) : (
                    <div className={cx('inner__top__right')}>
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <div className={cx('language')}>
                                <Button className={'more_button'}>
                                    <Globe />
                                </Button>
                            </div>
                        </Menu>
                        <div className={cx('theme')}>
                            <Moon />
                        </div>
                    </div>
                )}
            </div>
            <div className={cx('inner__body')}>
                <div className={cx('inner__body_wrapper')}>
                    <Link to= {routesConfig.home} ><img className={cx('logo__link')} src ="http://103.252.95.181:8000/media/photos/logos/logofull.png" alt="AdoPets"/></Link>
                    <Search />
                    <div>Cart</div>
                </div>
            </div>
            <ul className={cx('inner__footer')}>
                <li className={cx('nav__item')}>
                    <a className={cx('nav__item-link')} href="/">
                        Home
                    </a>
                </li>
                <li className={cx('nav__item')}>
                    <a className={cx('nav__item-link')} href="Shop">
                        Shop
                    </a>
                </li>
                <li className={cx('nav__item')}>
                    <a className={cx('nav__item-link')} href="Cart">
                        Cart
                    </a>
                </li>
                <li className={cx('nav__item')}>
                    <a className={cx('nav__item-link')} href="Contact">
                        Contact
                    </a>
                </li>
                <li className={cx('nav__item')}>
                    <a className={cx('nav__item-link')} href="Account">
                        Account
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
