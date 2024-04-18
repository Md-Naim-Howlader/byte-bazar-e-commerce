const getAddedProductsFromSessionStorage = () => {
  const data = sessionStorage.getItem("addedProducts");

  return data ? JSON.parse(data) : [];
};

export default getAddedProductsFromSessionStorage;
