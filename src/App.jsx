import ProductProvider from "./Context/productProvider";
import MainLayout from "./layout/MainLayout/MainLayout";
import "./styles/App.css";

const App = () => {
  return (
    <ProductProvider>
      <MainLayout />
    </ProductProvider>
  );
};

export default App;
