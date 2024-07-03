import { useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";
import getDataFromStorage from "../utils/getDataFromStorage";

import {
  handleAddToCartProduct,
  handleRemoveToCartProduct,
  handleEmptyCart,
} from "../reducer/actions";

// create context
import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const ProductContext = createContext(null);
// initail state
const initialState = {
  addedCartProducts: getDataFromStorage(),
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = useFetch("http://localhost:9000/products"); //https://json-server-for-bytebaazar.onrender.com/products
  useEffect(() => {
    sessionStorage.setItem(
      "addedProducts",
      JSON.stringify(state.addedCartProducts)
    );
  });

  const values = {
    addedCartProducts: state.addedCartProducts,
    handleAddToCartProduct,
    handleRemoveToCartProduct,
    handleEmptyCart,
    dispatch,
    data,
    loading,
    error,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ContextProvider;
