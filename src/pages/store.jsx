import "../styles/store.css";
import { useState, useEffect } from "react";
import CardContainer from "../components/CardContainer";

const Store = (props) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/", {
      mode: "cors",
    });
    const data = await response.json();

    return data;
  };

  const fetchItem = async (itemID) => {
    const response = await fetch(`https://fakestoreapi.com/products/${itemID}`, {mode:"cors"})
    const item = await response.json()

    return item
  }

  useEffect(() => {
    async function loadData() {
      let reqData = [];
      let allData = await fetchData();

      allData.forEach((item) => {
        if (
          item.category === "men's clothing" ||
          item.category === "women's clothing"
        ) {
          reqData.push(item);
        }
      });

      setProducts(reqData);
    }

    loadData();
  }, []);

  console.log("from store", products);

  const handleAddtoCart = async (e) => {
    let item = await fetchItem(e.target.id)
    console.log(item);
  }

  return (
    <div id="store">
      <CardContainer products={products} handleClick={handleAddtoCart}/>
    </div>
  );
};

export default Store;
