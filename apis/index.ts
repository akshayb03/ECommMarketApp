import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const allProductsUrl = 'https://api.jsonbin.io/v3/b/654dd34354105e766fcdefb2';

const getAllProducts = async () => {
  console.log('top');
  const response = await axios.get(allProductsUrl);
  console.log('bottom');
  return response.data.record;
};

export const UseGetAllProducts = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
  return {data, isLoading};
};
