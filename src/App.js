import Navbar from './components/Navbar/index.js'
import Footer from './components/Footer/index.js'
import Audio from './components/Audio-Gear/index.js'
import Shop from './components/Shop/index.js'
import Preview from './components/Preview/index.js'
import { shop, product_data } from  './data'

import Showcase_Header from './components/Showcase_Header/index.js'
import Showcase from './components/Showcase/index.js'
import Product_Detail from './components/Product_Detail/index.js'
import './App.css';

function App() {

  // product_data.map(element =>{
  //   element.name === 'YX1 WIRELESS EARPHONES' ? console.log(element.name, element.description, element.price, element.features, element.in_box.map(element2 =>{
  //     return (element2.quantity)
  //   })) : console.log("")
  // })

  
  return (
    <div className="app">

      <Product_Detail></Product_Detail>

      {/* Showcase Page         Showcase Page          Showcase Page          Showcase Page          Showcase Page  */}



      {/* <Showcase_Header></Showcase_Header>

      {shop[2].map(element =>{
          return (
            <Showcase image={element.desktop_image} name={element.name} info={element.description}></Showcase>
          )
      })}
      
      <Shop></Shop>
      <Audio></Audio>
      <Footer></Footer> */}




      {/* Home Page          Home Page          Home Page          Home Page         Home Page          Home Page        Home Page */}



      {/* <Navbar></Navbar>
      <div className="header">
        <div className="header_inner">

          <div className="right-content">

            <div className="new_product">NEW PRODUCT</div>

            <div className="header_heading_container">
              <div className="header_heading">XX99 MARK II HEADPHONES</div>
            </div>

            <div className="hero-about-outer">
            <div className="hero_about">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</div>
            </div>

            <button className="see_product">SEE PRODUCT</button>


          </div>


        </div>
      </div>

      <Shop></Shop>
      <Preview></Preview>
      <Audio></Audio>
      <Footer></Footer> */}


    </div>
  );
}

export default App;
