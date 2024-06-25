import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const register = async (username: string, email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/local/register`, {
        username,
        email,
        password,
    });
    if (response.data.jwt) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

export const login = async (identifier: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/local`, {
        identifier,
        password,
    });
    if (response.data.jwt) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
};
