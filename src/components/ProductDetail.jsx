import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../cartContext";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState("");
    const navigate = useNavigate();
    const { addToCart } = useCart();
    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            setProduct(res.data);
            console.log(product);
        })
        .catch((error) => { console.log(error) })
    }, [id]);

    const handleAddtoCart = () => {
        if (product) {
            addToCart(product);
            alert(`${product.title} is added to cart`);
        }
    }
        
    
    
    return (
      <>
        {/* <Link to={"/"}>Back</Link> */}
            <button onClick={() => {
                navigate(-1)
        }}>back</button>
        <div className="product-page">
          <div className="product-image">
            <img src={product.image} alt={product.title} datatype="image" />
          </div>
          <div className="product-details">
            <h1>Category: {product.category}</h1>
            <h2>{product.title}</h2>
            <h2>Price: ${product.price}</h2>
            <p>About: {product.description}</p>
            <button onClick={handleAddtoCart}>Add to Cart</button>
          </div>
        </div>
      </>
    );

}

export default ProductDetail;