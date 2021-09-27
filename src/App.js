import Navbar from './components/Navbar/index.js'
import Footer from './components/Footer/index.js'
import Audio from './components/Audio-Gear/index.js'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

import Home_Service from './Services/Home/index.js'
import Showcase_Service from './Services/Showcase_Service/index.js'
import './App.css';

function App() {
  
  return (
    
    <div className="app">
      <Router>

        <Navbar></Navbar>

          <Route path='/e-commerce-website' component={Home_Service}/>
          <Route path={['/headphones', '/speakers', '/earphones']} component={Showcase_Service}></Route>
        
        <Audio></Audio>
        <Footer></Footer>

      </Router>





    </div>
  );
}

export default App;
