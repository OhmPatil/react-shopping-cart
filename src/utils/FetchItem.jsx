const fetchItem = async (itemID) => {
    const response = await fetch(`https://fakestoreapi.com/products/${itemID}`, {mode:"cors"})
    const item = await response.json()

    return item
  }

  export default fetchItem