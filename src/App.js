import React, { useState } from 'react'
import Navbar from './components/Navbar/index.js'
import Footer from './components/Footer/index.js'
import Audio from './components/Audio-Gear/index.js'
import Shop from './components/Shop/index.js'
import { motion } from 'framer-motion'

import { product_data} from './data.js'

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home_Service from './Services/Home/index.js'
import Showcase_Service from './Services/ShowcaseService/index.js'
import ProductDetailService from './Services/ProductDetailService/index.js'

function App() {

  const [ position, setPosition ] = useState("-100vw")

  let path_list = []

  product_data.map(element => {
    path_list.push(`/${element.name.split(" ").join("-").toLowerCase()}`)
  })
  
  let changePosition = () => {
    if(position === "-100vw"){
      setPosition("0vw")
    }else{
      setPosition("-100vw")
    }
  }
  return (
    
    <div className="app">
      <Router>

        <Navbar onSelect={changePosition}/>
        <motion.div 
          initial={{
            x: "-100vw"
          }}
          animate={{
            x: position,
            transition: {
              type: 'spring',
              stiffness: 400,
              damping: 30,
            }
          }}
          className="navbar_shop_container"
        >
          <Shop/>
        </motion.div>
        
          <Route path={['/', '/e-commerce-website', '/home']} exact component={Home_Service}/>
          <Route path={['/headphones', '/speakers', '/earphones']} exact component={Showcase_Service}></Route>
          <Route path={path_list} exact component={ProductDetailService}></Route>
        
        <Audio></Audio>
        <Footer></Footer>

      </Router>

    </div>
  );
}

export default App;
