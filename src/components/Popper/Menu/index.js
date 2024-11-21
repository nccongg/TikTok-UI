import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ children, item = [] }) {
    const renderItem = () => {
        return item.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            delay={(0, 500)}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="1" {...attrs}>
                    <PopperWrapper className={cx('wrapper')}>{renderItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;