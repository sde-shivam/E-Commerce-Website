import { useState, useEffect } from "react";
import ProductList from "./productList";
import './App.css'

function App() {
  const [products,setProducts]=useState([]);
  const [categories,setCategories]=useState([]);
  const [selectedCategories,setSelectedCategories]=useState(null);
  const [searchTerm,setSearchTerm]=useState("");
  const [sortOrder,setSortOrder]=useState("asc");

  useEffect(( )=>{
    fetch('http://localhost:8080/api/products')
    .then(response => response.json())
    .then(data => setProducts(data));

    fetch('http://localhost:8080/api/categories')
    .then(response => response.json())
    .then(data => setCategories(data));
  },[]);

  return (
   <div className="container">
    <h1 className="my-4">Product Catalog</h1>

    <div className="row align-items-center mb-4">
      <div className="col-md-3 col-sm-12 mb-12">
        <p></p>
      </div>
    </div >

    <div>
      {products.length ? (
       //Display products 
       <ProductList products={products}/>
      ):(
       <p>No Products Found</p>
      )}
    </div>
   </div>
  )
}

export default App
