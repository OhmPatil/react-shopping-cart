import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Store from "../pages/store";
import Cart from "../pages/cart";

const Switcher = () => {
    return (
        // <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/store" element={<Store/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
            </Routes>
        // </BrowserRouter>
    )
}

export default Switcher