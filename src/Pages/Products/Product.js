import './Product.css';
import Pbar from "../../components/Navbar/Pbar.js";
import { useState } from 'react';
import kiwi from './kiwi.jpg';
import ha from './ha.jpg';
import pp from './pp.jpg';
import df from './df.jpg';
import s from './s.jpg';
import m from './m.jpg';

function Products() {

    const [products, setProducts] = useState([
        {
            productImage : kiwi,
            id : 1,
            productName : "Kiwi",
            price : "Rs.50/piece",
            quantity : 0,
        },
        {
            productImage : ha,
            id : 2,
            productName : "Himachali Apple",
            price : "Rs.100/kg",
            quantity : 0,
        },
        {
            productImage : pp,
            id : 3,
            productName : "Pink Pineapple",
            price : "Rs.250/piece",
            quantity : 0,
        },
        {
            productImage : s,
            id : 4,
            productName : "Strawberries",
            price : "Rs.300/kg",
            quantity : 0,
        },
        {
            productImage : df,
            id : 5,
            productName : "Dragon Fruit",
            price : "Rs.50/piece",
            quantity : 0,
        },
        {
            productImage : m,
            id : 6,
            productName : "Alphonso Mango",
            price : "Rs.350/kg",
            quantity : 0,
        },
    ]);


    const inc = (id) =>{
        const newpro = [...products];
        newpro[id-1].quantity = newpro[id-1].quantity + 1;
        setProducts(newpro);
    }

    const dec = (id) =>{
        const newpro = [...products];
        newpro[id-1].quantity = newpro[id-1].quantity - 1;
        setProducts(newpro);
    }

return(
    <div>
    <Pbar />
    <div className="pro">
        {products.map((product) => {
            return(
                <div>
                    <div className="box">
                    <div className="image"><img src={product.productImage} /></div>
                    <div className="pinfo"> 
                    <div>Product Name : {product.productName}</div>
                    <div>Product Price : {product.price}</div>
                    <div>Product Quantity : {product.quantity}</div>
                    <div className="buttons">
                      <button className="btn"
                      onClick = {() => {
                        inc(product.id);
                      }}>Increase</button>
                      <button className="btn"
                      onClick = {() => {
                        dec(product.id);
                    }}>Decrese</button>
                    </div>
                    <button className="btn">Add to Cart</button>
                    </div>
                    </div>
                </div>
            );
        })}
    </div>
    </div>   
  );
}

export default Products;