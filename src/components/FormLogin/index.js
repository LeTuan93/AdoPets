import classNames from 'classnames/bind';
import styles from './FormLogin.module.scss';
import Button from '~/components/Button';
import { useState } from 'react';
import * as searchServices from '~/apiServices/Services';

const cx = classNames.bind(styles);
function FormLogin({ onClose }) {
    //bổ sung tại đây
    const [username, setUsername] = useState('1');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const [loginResponse, setLoginResponse] = useState(null);
    const handleLogin = async () => {
        try {
            // Gọi API đăng nhập
            const userData = {
                username,
                password,
            };
            const response = await searchServices.login(userData);

            // Xử lý kết quả đăng nhập tại đây
            console.log('Login response:', response);

            // lưu vào sessionStorage và chỉ lưu token
            sessionStorage.setItem('loginToken', response.token);
            
            // Đóng form khi đăng nhập thành công
            onClose();
        } catch (error) {
            // Xử lý lỗi sai tài khoản mật khẩu sử dụng toast (xử lí sau)
            console.error('Login error:', error);
            //gọi hàm trong lỗi không đăng nhập được 

        }
    };
    const handleSubmit = () => {
        // Kiểm tra điều kiện trước khi gọi handleLogin
        if (username && password) {
            handleLogin();
        } else {
            // Xử lý trường hợp người dùng chưa nhập đủ thông tin
            console.error('Please enter both username and password');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span className={cx('title')}>Login</span>
                <Button onClick={onClose} className={cx('close_btn')}></Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('register')}>
                    <input
                        placeholder="Nhập tài khoản"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <input
                        placeholder="Nhập mật khẩu"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className={cx('checkSaveLogin')}>
                    <input type="checkbox" className={cx('check')} name="checkSave"></input>
                    <label htmlFor="checkSave" className={cx('checkSave')}>
                        Remember Password
                    </label>
                </div>
                <Button className={cx('btnLogin')} onClick={handleSubmit}>
                    Login
                </Button>
                <div className={cx('')}></div>
                <div className={cx('register')}></div>
            </div>
            <div className={cx('footer')}>
                <div>Do you have an account here ? Register</div>
                <div>Forgot password!</div>
            </div>
        </div>
    );
}

export default FormLogin;
