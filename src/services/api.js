import axois from 'axios';

const BASE_URL = 'https://fakestoreapi.com'

const getProducts = async () => {
    const response = await axois.get(`${BASE_URL}/products`)
    return response.data
}
export {getProducts}