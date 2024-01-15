import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('footer__banner')}>
                <Image
                    src="http://103.252.95.181:8000/media/photos/logos/bannerProduct.png"
                    className={cx('footer__banner-img')}
                    alt="Footer Banner"
                />
            </div>
            <div className="footer__contain grid wide">
                <div className="footer__contain--wrap">
                    <div className="col l-4 c-4 mb-12">
                        <div className="about-us">
                            <h3>Về PetLa</h3>
                            <p>
                                PetsLa ra đời với sứ mệnh Pets hóa thế giới loài người bằng cách mang đến cho cộng đồng
                                những content thú vị, đáng yêu về pets.
                            </p>
                        </div>
                    </div>
                    <div className="col l-4 c-4 mb-0"></div>
                    <div className="col l-4 c-4 mb-12">
                        <div className="follow-us">
                            <h3>Follow Us</h3>
                            <div className="follow-us--wrap">
                                <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
