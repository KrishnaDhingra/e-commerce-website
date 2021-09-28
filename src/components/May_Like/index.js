import React from 'react';
import './may_like.css';
import {shop, product_data} from '../../data';
import { Link } from 'react-router-dom'

function May_Like() {

    var first_random = null
    var second_random = null
    var third_random = null

    let select_random = () =>{

        
        function generate(){
            first_random = Math.floor(Math.random() * product_data.length)
            second_random = Math.floor(Math.random() * product_data.length)
            third_random = Math.floor(Math.random() * product_data.length)
        }

        while(first_random === second_random || first_random === third_random || second_random === third_random){
            generate()
        }

    }

    select_random()

    let first_product = [product_data[first_random].name, product_data[first_random].desktop_image]

    let second_product = [product_data[second_random].name, product_data[second_random].desktop_image]

    let third_product = [product_data[third_random].name, product_data[third_random].desktop_image]

    return(
        <div className="may_like">

            <h1 className="may_like_heading">YOU MAY ALSO LIKE</h1>

            <div className="may_like_product_container">

                <div className="first_product">
                    <img className="may_like_product_image" src={first_product[1]}/>
                    <p className="may_like_product_name">{first_product[0]}</p>
                    <Link to={{pathname: `/${first_product[0].split(" ").join("-").toLowerCase()}`, state: first_product[0].toUpperCase()}}>

                        <button className="showcase_see_product" onClick={() =>{
                        }}>SEE PRODUCT</button>
                    </Link>

                </div>
                <div className="second_product">
                    <img className="may_like_product_image" src={second_product[1]}/>
                    <p className="may_like_product_name">{second_product[0]}</p>
                    <Link to={{pathname: `/${second_product[0].split(" ").join("-").toLowerCase()}`, state: second_product[0].toUpperCase()}}>

                        <button className="showcase_see_product" onClick={() =>{
                        }}>SEE PRODUCT</button>
                    </Link>
                </div>
                <div className="third_product">
                    <img className="may_like_product_image" src={third_product[1]}/>
                    <p className="may_like_product_name">{third_product[0]}</p>
                    <Link to={{pathname: `/${third_product[0].split(" ").join("-").toLowerCase()}`, state: third_product[0].toUpperCase()}}>

                        <button className="showcase_see_product" onClick={() =>{
                        }}>SEE PRODUCT</button>
                    </Link>
                </div>
                
            </div>

        </div>
    )
}
export default May_Like