import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Styles from './Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(Styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        onChange(item);
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            delay={[0, 700]}
            offset={[12,8]}
            interactive={true} // cho phép chọn vào các mục được tìm kiếm
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu_list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
