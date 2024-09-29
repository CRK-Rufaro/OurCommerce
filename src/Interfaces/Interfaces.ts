export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

export type CartItem = {
    product: Product;
    quantity: number;
};


