import "../styles/store.css";
import CardContainer from "../components/CardContainer";

const Store = (props) => {
  return (
    <div id="store">
      <CardContainer
        products={props.products}
        handleAddtoCart={props.handleAddtoCart}
      />
    </div>
  );
};

export default Store;
