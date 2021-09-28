import './showcase.css'
import React, { useState } from 'react'
import Showcase_Header from '../Showcase_Header/index.js'
import Showcase_Service from '../../Services/ShowcaseService/index.js'
import {Link} from 'react-router-dom'

function Showcase(props){

    const [ productName, setProductName ] = useState('')

    return(

        <div>
            <div className="showcase">

                
                <div className="showcase_image_container">
                    <img className="showcase_product_image" src={props.image}/>
                </div>

                <div className="showcase_info_container">

                    <p className="showcase_new_product">NEW PRODUCT</p>
                    <p className="showcase_product_name">{props.name}</p>
                    <span className="showcase_info">{props.info}</span>
                    <Link to={{pathname: `/${props.name.split(" ").join("-").toLowerCase()}`, state: props.name.toUpperCase()}}>

                        <button className="showcase_see_product" onClick={() =>{
                        }}>SEE PRODUCT</button>
                        
                    </Link>
                    
                </div>
            </div>
        </div>
    )

}
export default Showcase