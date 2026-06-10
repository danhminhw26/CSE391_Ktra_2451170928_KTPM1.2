import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import products from "./data/data";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      
      <div className="content">
        <ProductForm />
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default App;