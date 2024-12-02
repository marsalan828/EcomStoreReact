import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [prodList, setProdList] = useState([]);
    const [searchedProduct, setSearchedProduct] = useState("");
    const [filteredProd,setFilteredProduct] =useState([])

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {setProdList(res.data); setFilteredProduct(res.data)})
            .catch((error) => console.log(error));

    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchedProduct(value);
        console.log(value);

        setFilteredProduct(prodList.filter((product) => {
            return product.title.toLowerCase().includes(value.toLowerCase());
        }))
    }
    
    
    return (
      <>
        <div className="products-list">
          <h1>Products List</h1>
          <input type="text" value={searchedProduct} onChange={handleChange} />
          <ul className="display-list">
            {filteredProd.map((product) => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                  {product.title} - {prodList.price}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
}
export default Home;