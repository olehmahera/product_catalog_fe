import { ProductCollection } from '../components/Catalog/Catalog_Types';
import { client } from './axiosClient';

interface Phone {
  id: number;
}

export const getPhones = () => {
  return client.get<any[]>(`/products`);
};

export const getSomeProducts = (params: string) => {
  return client.get<ProductCollection>(`/products?${params}`);
};

type Category = string | '';

export const getPhonesByCategory = (page: number, category: Category) => {
  return client.get<Phone[]>(`/phones?page=${page}&category${category}`);
};

export const getPhoneById = (id: number) => {
  return client.get<Phone[]>(`/phones/${id}`);
};
