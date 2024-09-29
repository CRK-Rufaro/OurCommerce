import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartSlice';
import {useGetProductsQuery}  from '../../redux/products/productSlice';
import classes from './ProductListing.module.scss'; 
import {ProductCard} from '../Product_Card/ProductCard';
import { Product } from '../../Interfaces/Interfaces';


export const ProductListing: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery(undefined);

const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div className={classes['product-listing']}>
      {products?.map((product:Product) => {

        if ([9,10,11,12,13,14].includes(product.id)) return null; 
        return(
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={()=>dispatch(addItem(product))} 
        />);
})}
    </div>
  );

};


