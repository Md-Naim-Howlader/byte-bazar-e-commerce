import ContextProvider from "./Context/ContextProvider";
import MainLayout from "./layout/MainLayout/MainLayout";

import "./styles/App.css";

const App = () => {
  return (
    <ContextProvider>
      <MainLayout />
    </ContextProvider>
  );
};

export default App;
