import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar/index.js'
import Footer from '../Footer/index.js'
import Audio from '../Audio-Gear/index.js'
import Shop from '../Shop/index.js'
import Preview from '../Preview/index.js'
import { shop, product_data } from  '../../data'

import Showcase_Header from '../Showcase_Header/index.js'
import Showcase from '../Showcase/index.js'

function Product_Detail(){

    const [product_name, setName] = useState('YX1 WIRELESS EARPHONES')
    const [product_info, setInfo] = useState('')
    const hello = 'hello'

    console.log(product_data)

    product_data.map(element =>{
        if(element.name === 'YX1 WIRELESS EARPHONES'){
            return(
                <p>{element.description}</p>
            )
        }else{
            return(
                <p>Hello</p>
            )
        }
    })


}
export default Product_Detail