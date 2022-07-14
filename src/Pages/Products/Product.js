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

    const [q,setQ] = useState(0);
    const products = [
        {
            productImage : kiwi,
            productName : "Kiwi",
            price : "Rs.50/piece",
            quantity : 0,
        },
        {
            productImage : ha,
            productName : "Himachali Apple",
            price : "Rs.100/kg",
            quantity : 0,
        },
        {
            productImage : pp,
            productName : "Pink Pineapple",
            price : "Rs.250/piece",
            quantity : 0,
        },
        {
            productImage : s,
            productName : "Strawberries",
            price : "Rs.300/kg",
            quantity : 0,
        },
        {
            productImage : df,
            productName : "Dragon Fruit",
            price : "Rs.50/piece",
            quantity : 0,
        },
        {
            productImage : m,
            productName : "Alphonso Mango",
            price : "Rs.350/kg",
            quantity : 0,
        },
    ]

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
                    <div>Product Quantity : {q}</div>
                    <div className="buttons">
                      <button className="btn"
                      onClick = {() => {
                        setQ(q+1);
                    }}>Increase</button><br />
                      <button className="btn"
                      onClick = {() => {
                        setQ(q-1);
                    }}>Decrese</button>
                    </div>
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