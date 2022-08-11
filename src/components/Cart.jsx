import {FaShoppingCart} from 'react-icons/fa'
import '../styles/cart-icon.css'

const CartIcon = (props) => {
    return(
        <div id='container'>
            <FaShoppingCart size='1.5rem'/>
            <div id='amount'>{props.amount}</div>
        </div>
    )
}

export default CartIcon