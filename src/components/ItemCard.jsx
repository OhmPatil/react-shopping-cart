import '../styles/item-card.css'

const ItemCard = (props) => {
    return(
        <div className='card'>
            <img src={props.image} alt={props.id} />
        </div>
    )

}

export default ItemCard