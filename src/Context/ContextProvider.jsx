import { useEffect, useReducer } from "react";
import reducer from "../Reducer/reducer";
import initialState from "../Reducer/initialState";
import {
  handleAddToCartProduct,
  handleRemoveToCartProduct,
  handleEmptyCart,
} from "../Reducer/actions";

// create context
import { createContext } from "react";
import useFetch from "../hooks/useFetch";
export const ProductContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = useFetch("http://localhost:9000/products");
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
