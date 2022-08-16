import '../styles/cart.css'

const Cart = (props) => {
    let items = props.cartItems
    console.log('fromCART', items);
    return(
        <div id='cart'>
            Cart Page
        </div>
    )
}

export default Cart