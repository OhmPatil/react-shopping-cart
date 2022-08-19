import "../styles/store.css";
// import { useState, useEffect } from "react";
import CardContainer from "../components/CardContainer";

const Store = (props) => {

  console.log("from store", props.products);

  return (
    <div id="store">
      <CardContainer products={props.products} handleAddtoCart={props.handleAddtoCart}/>
    </div>
  );
};

export default Store;
