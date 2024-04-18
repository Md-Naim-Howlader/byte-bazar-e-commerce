import getAddedProductsFromSessionStorage from "../Utils/getAddedProductsFromSessionStorage";
const initialState = {
  addedCartProducts: getAddedProductsFromSessionStorage(),
};
export default initialState;
