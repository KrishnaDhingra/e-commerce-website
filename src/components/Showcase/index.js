import './showcase.css'
import {Link} from 'react-router-dom'

function Showcase(props){

    return(
        <div className="showcase">
            <div className="showcase_image_container">
                <img className="showcase_product_image" src={props.image}/>
            </div>

            <div className="showcase_info_container">

                <p className="showcase_new_product">NEW PRODUCT</p>
                <p className="showcase_product_name">{props.name}</p>
                <span className="showcase_info">{props.info}</span>
                <button className="showcase_see_product" onClick={() =>{
                    console.log(props.name)
                }}>SEE PRODUCT</button>
                
            </div>
        </div>
    )

}
export default Showcase