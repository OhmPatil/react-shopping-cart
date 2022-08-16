import '../styles/cart.css'
import ItemCard from '../components/ItemCard';

const Cart = (props) => {
    let items = props.cartItems
    console.log('fromCART', items);
    return(
        <div id='cart'>
            {items.map(item => {
                return(
                    <ItemCard image={item.image}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    />
                )
            })}
        </div>
    )
}

export default Cart