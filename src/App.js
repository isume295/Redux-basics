import { Navbar } from "./components/Navbar";
import { CartContainer } from "./components/CartContainer";
import Modal from "./components/Modal";
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

function App() {
  const {cartItems, isLoading} = useSelector((state) => state.cart)
  const {isOpen} = useSelector((store) => store.modal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems]);

  useEffect(() => {
    dispatch(getCartItems())
  },[])

  if(isLoading) {
    return (
      <div className="loading">
      <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
    {isOpen === true? <Modal/> : ''} 
    {/* <Modal/> */}
    <Navbar/>
    <CartContainer/>
    </main>
  );
}
export default App;
