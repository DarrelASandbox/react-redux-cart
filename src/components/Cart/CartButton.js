import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toogleCartHandler = () => dispatch(uiActions.toggle());

  return (
    <button className={classes.button} onClick={toogleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
