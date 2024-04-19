import MainLayout from "./layout/MainLayout/MainLayout";
import ProductProvider from "./Context/productProvider";
import "./styles/App.css";

const App = () => {
  return (
    <ProductProvider>
      <MainLayout />
    </ProductProvider>
  );
};

export default App;
