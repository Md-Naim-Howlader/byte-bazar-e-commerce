import { ADD_TO_CART, CART_EMPTY, REMOVE_TO_CART } from "./actionsType";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        addedCartProducts: [...state.addedCartProducts, payload],
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        addedCartProducts: [...state.addedCartProducts].filter(
          (item) => item.id !== payload
        ),
      };
    case CART_EMPTY:
      return {
        ...state,
        addedCartProducts: payload,
      };

    default:
      return state;
  }
};

export default reducer;
