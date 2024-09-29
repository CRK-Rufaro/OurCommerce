import React from 'react';
import classes from './ProductCard.module.scss';
import { Product } from '../../Interfaces/Interfaces';


interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isCarousel?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart , isCarousel=false}) => {
  return (
    <div className={`${classes.productCard} ${isCarousel ? classes.carousel : ''}`}>
      <img src={product.image} alt={product.title} className={classes.productImage} />
      <div className={classes.productTitle}>{product.title}</div>
      <div className={classes.footer}>
      <p className={classes.productPrice}>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)} className={classes.addButton}>
        Add to Cart
      </button>
      </div>
    </div>
  );
};

