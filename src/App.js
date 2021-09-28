import Navbar from './components/Navbar/index.js'
import Footer from './components/Footer/index.js'
import Audio from './components/Audio-Gear/index.js'

import { product_data, shop } from './data.js'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

import Home_Service from './Services/Home/index.js'
import Showcase_Service from './Services/ShowcaseService/index.js'
import ProductDetailService from './Services/ProductDetailService/index.js'
import './App.css';

function App() {

  let path_list = []

  product_data.map(element => {
    path_list.push(`/${element.name.split(" ").join("-").toLowerCase()}`)
  })
  
  return (
    
    <div className="app">
      <Router>

        <Navbar></Navbar>

          <Route path={['/e-commerce-website', '/home']} component={Home_Service}/>
          <Route path={['/headphones', '/speakers', '/earphones']} component={Showcase_Service}></Route>
          <Route path={path_list} component={ProductDetailService}></Route>
        
        <Audio></Audio>
        <Footer></Footer>

      </Router>





    </div>
  );
}

export default App;
