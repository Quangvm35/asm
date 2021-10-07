
import { useEffect, useState } from "react";
import Routes from "./Routers";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://6153be7e3f4c430017159417.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const HandleAdd = (product) => {
    setProducts([...products, product]);
  };
  const onHandleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  const onHandleUpdate = (product) => {
    console.log("app", product);
    const newProject = products.map((item) =>
      item.id === product.id ? product : item
    );
    setProducts(newProject);
  };
  return (
    <div className="App">
      <Routes
        products={products}
        onAdd={HandleAdd}
        onDelete={onHandleDelete}
        onUpdate={onHandleUpdate}
      />

    </div>
  );
}

export default App;
