import { ADD_TO_CART, CART_EMPTY, REMOVE_TO_CART } from "./actionsType";

export const handleAddToCartProduct = (dispatch, product) => {
  return dispatch({ type: ADD_TO_CART, payload: product });
};
export const handleRemoveToCartProduct = (dispatch, id) => {
  return dispatch({ type: REMOVE_TO_CART, payload: id });
};

export const handleEmptyCart = (dispatch, data) => {
  return dispatch({ type: CART_EMPTY, payload: data });
};
