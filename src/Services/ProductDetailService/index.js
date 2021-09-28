import React from 'react'
import Product_Detail from "../../components/Product_Detail/index.js";
import May_Like from "../../components/May_Like/index.js";
import { Shop }  from "../../components/Shop/index.js";

function ProductDetailService(props) {
    return (
        <div>
            <Product_Detail product_name={props.location.state}/>
            <May_Like/>
            <Shop/>
        </div>
    )
}
export default ProductDetailService