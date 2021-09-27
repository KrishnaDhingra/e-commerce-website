import Navbar from '../Navbar/index.js'
import './showcase_header.css'

function Showcase_Header(props){
    return(
        <div className="showcase_header">

            <div className="heading_header">{props.text ? props.text : 'HEADPHONES'}</div>

        </div>
    )

}
export default Showcase_Header