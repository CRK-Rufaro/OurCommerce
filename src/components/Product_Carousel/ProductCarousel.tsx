import React, { useRef } from 'react';
import { useGetProductsByCategoryQuery } from '../../redux/products/productSlice'; // Assuming you're using Redux for fetching

import classes from './ProductCarousel.module.scss';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartSlice';
import { Product } from '../../Interfaces/Interfaces';
import { ProductCard } from '../Product_Card/ProductCard';



export const ProductCarousel: React.FC = () => {
    const dispatch = useDispatch();
    const { data: products, isLoading, error } = useGetProductsByCategoryQuery('jewelery');
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred</div>;
    

    return (
        <div className={classes.carouselContainer}>
            <button onClick={scrollLeft} className={classes.navButton}>‹</button>

            <div className={classes.carousel} ref={carouselRef}>

                {products?.map((product: Product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        isCarousel = {true}
                        onAddToCart={() => dispatch(addItem(product))}
                    />
                ))}

            </div>

            <button onClick={scrollRight} className={classes.navButton}>›</button>
        </div>
    );
};

