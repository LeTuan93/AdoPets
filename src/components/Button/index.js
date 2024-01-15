import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to, // đường dẫn ở nội bộ cho route
    href, // đường dẫn tới trang khác
    primary = false, // thuộc tính css
    outline = false, //gạch chân
    text = false, // nút chỉ có text
    disabled = false, // không cho bấm nút
    small = false, //kích thước nút nhỏ
    large = false, //kích thước nút to
    children, // nội dung bên trong nút
    onClick, // hàm xử lý khi click vào nút
    className, // custom nút  muốn như nào cũng đc nè
    leftIcon, // nút có Icon bên trái
    rightIcon, // nút có Icon bên phải,
    hover, // nút có hover
    ...passProps // các thuộc tính khác
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('wrapper', {
        [className] : className,
        primary,
        outline,
        text,
        disabled,
        small,
        large,
        hover,
    });
    return (
        <Comp className={classes} {...props} >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{leftIcon}</span>}
        </Comp>
    );
}

export default Button;
