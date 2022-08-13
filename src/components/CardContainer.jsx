import '../styles/card-container.css'
import ItemCard from './ItemCard'

const CardContainer = (props) => {

    return (
        <div className='container'>
            {props.products.map(item => {
                return(
                    <ItemCard image={item.image}/>
                )
            })}
        </div>
    )
}

export default CardContainer