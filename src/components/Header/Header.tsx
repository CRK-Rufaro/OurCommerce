import { FunctionComponent } from 'react'

import { Cart } from '../Cart/Cart';
import classes from './Header.module.scss'; 

export const Header: FunctionComponent = () => {
  return (
    <header className={classes.Header}>
      <img className={classes.logo} src="./src/assets/ourcommerce_logo.svg" alt="OurCommerce Logo" />
      <div className={classes.shoppingCart}>
        <Cart/>
      </div>
    </header>

  );
}