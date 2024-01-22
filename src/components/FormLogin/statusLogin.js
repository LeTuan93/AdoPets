function statusLogin() {
    const storedToken = sessionStorage.getItem('loginToken');
    console.log(storedToken);
    return storedToken != null ? true : false;
}
export default statusLogin;
