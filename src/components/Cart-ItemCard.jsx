import { useState } from 'react'
import '../styles/cart-itemcard.css'

const CartItemCard = (props) => {

    const [quantity, setQuantity] = useState(props.quantity)

    const incrementQuantity = () => {
        props.handleQuantityChange(props.id, quantity+1)
        setQuantity(prevQuantity => prevQuantity+1)
      }
    
      const decrementQuantity = () => {
        if (quantity > 1){
            props.handleQuantityChange(props.id, quantity-1)
          setQuantity(prevQuantity => prevQuantity-1)
        }
      }
      

    return (
        <div className='cart-itemcard'>
            <div className='cart-itemimg'>
                <img src={props.image} alt={props.id}></img>
            </div>
            <div className='cart-title-price'>
                <div>{props.title}</div>
                <div>${props.price}</div>
            </div>
            <div className='quantity'>
                <button onClick={decrementQuantity}>-</button>
                <div>{quantity}</div>
                <button onClick={incrementQuantity}>+</button>
            </div>
            <div className='cart-itemtotalprice'>${(props.price * quantity).toFixed(2)}</div>
            <div className='cart-itemdelete'>
                <button onClick={() => props.handleDelete(props.id)}>Delete</button>
            </div>

        </div>
    )
}

export default CartItemCard