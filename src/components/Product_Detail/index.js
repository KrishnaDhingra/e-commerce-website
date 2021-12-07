import React, { useState } from 'react';
import './product_detail.css'
import { product_data } from  '../../data'

function Product_Detail(props){

    const [ counter, setCounter ] = useState(1)
    
    let id = product_data.map(element =>{
        if(element.name === props.product_name){
            return element.id
        }
    })
    let num = 0

    id.map(element =>{
        if(element){
            num = element
        }
    })

    let info = product_data.map(element =>{
        if(element.name === props.product_name){
            return [element.name, element.desktop_image, element.tablet_image, element.mobile_image, element.description, element.price, element.features]
        }else{
            return null
        }
    })
    console.log(info)

    const name = info[num][0]
    const desktop_image = info[num][1]
    const tablet_image = info[num][2]
    const mobile_image = info[num][3]
    const description = info[num][4]
    const price = info[num][5]
    const features = info[num][6]


    const in_box = product_data.map(element =>{
        if(element.name === props.product_name){
            return element.in_box
        }
    })

    let change_counter = (effect) =>{
        if(effect === 'decrease'){
            if(counter > 0){
                setCounter(counter - 1)
            }
        }else{
            setCounter(counter + 1)
        }

    }
    let updateData = (name, price, quantity, image) => {

        let newData = {
            product_name: name,
            product_price: price,
            product_quantity: quantity,
            product_image: image
        }

        let prevData = JSON.parse(localStorage.getItem('d')) ? JSON.parse(localStorage.getItem('d')) : []

        let check = prevData.some((element) => element.product_name === name)

        if(check === true){
            prevData.map((element) => {
                if(element.product_name === name){
                    element.product_quantity = parseInt(element.product_quantity) + parseInt(quantity)
                }
            })
        }else{
            prevData.push(newData)
        }
        localStorage.setItem('d', JSON.stringify(prevData))
        console.log(JSON.parse(localStorage.getItem('d')))

    }

    return(

        <div className="product_detail">


            <div className="product_top_container">

                <div className="product_image_container">
                    <img className="product_image" src={desktop_image} alt="image" />
                </div>
                <div className="product_overall_info">

                    <p className="new_product">NEW PRODUCT</p>
                    <p className="product_name">{name}</p>
                    <p className="product_description">{description}</p>
                    <p className="product_price">{price}</p>

                    <div className="button_container">

                        <div className="product_quantity">
                            <div className="decrease" onClick = {() => change_counter('decrease')}>-</div>
                            <div className="quantity_counter">{counter}</div>
                            <div className="increase" onClick = {() => change_counter('increase')}>+</div>
                        </div>
                        <button className="add_to_cart" onClick={() => updateData(name, price, counter, desktop_image)}>ADD TO CART</button>

                    </div>

                </div>

            </div>

            <div className="product_middle_container">

                <div className="features_container">
                    <p className="heading">FEATURES</p>
                    <p className="product_features">{features}</p>
                </div>
                <div className="in_box_container">

                    <p className="heading">IN THE BOX</p>
                    <div className="material_quantity_container">
                        {in_box[num].map(element =>{
                            return(
                                <div className="material_quantity">
                                    <span className="quantity">{element.quantity}</span>
                                    <span className="material">{element.material}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </div>





        </div>
    )
}
export default Product_Detail