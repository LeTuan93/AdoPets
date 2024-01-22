import { useState, useEffect, useRef } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchServices from '~/apiServices/Services';
import request from '~/utils/request';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemSearch from '../ItemSearch';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    //sử dụng debounced để khi gõ mỗi chữ thì mỗi chữ không bị call api liên tục mà chỉ khi dừng gõ 500ms thì api mới đc load
    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            const result = await searchServices.search(debounced);
            const filteredResults = result.filter((product) =>
                product.product_name.toLowerCase().includes(debounced.toLowerCase()),
            );
            // Cập nhật setSearchResult với kết quả lọc
            setSearchResult(filteredResults);
        };
        fetchApi();
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        //bọc thẻ div để không bị warning khi sử dụng tippy
        <div>
            <Tippy
                interactive={true} // cho phép chọn vào các mục được tìm kiếm
                placement="bottom"
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search__result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search__title')}>Hint</h4>
                            <div className={cx('Items')}>
                                {searchResult.map((result) => (
                                    <ItemSearch key={result.id} data={result} />
                                ))}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search_bar')}>
                    <input
                        ref={inputRef} // focus  lại ô input sau khi ấn tìm kiếm
                        value={searchValue}
                        className={cx('search_bar_input')}
                        onChange={(e) => {
                                setSearchValue(e.target.value);
                        }}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (
                        <button
                            className={cx('search_bar_button')}
                            onClick={() => {
                                handleClear();
                            }}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    )}
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
