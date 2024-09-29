import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    
    getProductsByCategory: builder.query({
      query: (category) => `products/category/${category}`,
    }),
  }),
});

export const {useGetProductsQuery,  useGetProductsByCategoryQuery } = productApi;
