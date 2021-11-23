import React from 'react'
import './product_grid.css'
import { product_data } from  '../../data'

function Product_Grid(props){

    let num = 0

    // images returns a list of objects and one of them is object that we require and to pick that object we need a variable that is equal to the id of the object
    
    let images = product_data.map(element => {

        if(element.name === props.product_name){
            num = element.id 
            return element.grid_images
        }else{
            return null
        }
    })

    let top_left = images[num][0].top_left
    let bottom_left = images[num][1].bottom_left
    let right = images[num][2].right

    return (
        <div className="product_grid_container">
            <img src={top_left} alt="" className="top_left" />
            <img src={bottom_left} alt="" className="bottom_left" />
            <img src={right} alt="" className="right" />
        </div>
    )
}
export default Product_Grid