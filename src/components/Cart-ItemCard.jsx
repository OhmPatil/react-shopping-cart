import { useState } from 'react'
import '../styles/cart-itemcard.css'
import { motion } from "framer-motion";

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
        <motion.div className='cart-itemcard'
        initial={{y:100, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0}}>
            <div className='cart-itemimg'>
                <img src={props.image} alt={props.id}></img>
            </div>
            <div className='cart-title-price'>
                <div>{props.title}</div>
                <div>${props.price}</div>
            </div>
            <div className='store-quantity-container'>
                <button className='quantity-button' onClick={decrementQuantity}>−</button>
                <div>{quantity}</div>
                <button className='quantity-button' onClick={incrementQuantity}>+</button>
            </div>
            <div className='cart-itemtotalprice'>${(props.price * quantity).toFixed(2)}</div>
            <div className='cart-itemdelete'>
                <button className='delete-button' onClick={() => props.handleDelete(props.id)}>Delete</button>
            </div>

        </motion.div>
    )
}

export default CartItemCard