import request from '~/utils/request';

export const search = async () => {
    try {
        const res = await request.get('products/');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const login = async (userData) => {
    try {
      const response = await request.post('login/', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        // Trả về dữ liệu khi đăng nhập thành công
        return response.data;
      } else {
        // Xử lý trường hợp khác (ví dụ: server trả về mã lỗi)
        console.error('Login failed. Status:', response.status);
        throw new Error('Login failed');
      }
    } catch (error) {
      // Xử lý lỗi trong quá trình gửi yêu cầu
      console.error('Request failed:', error);
      throw error;
    }
  };

