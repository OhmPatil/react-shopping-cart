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
    let allData = data
    return allData;
  };

  useEffect(() => {
    async function loadData() {
        let reqData = []
        reqData = await fetchData()
        setProducts(reqData)
    }

    loadData();
  }, []);

  console.log('from store',products);

  return (
    <div id="store">
      <CardContainer products={products}/>
    </div>
  );
};

export default Store;
