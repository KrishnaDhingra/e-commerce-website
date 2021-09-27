import Shop from '../../components/Shop/index.js'
import Preview from '../../components/Preview/index.js'
import Home_Header from '../../components/Home_Header/index.js'

function Home_Service() {
  
    return (
      <div className="home_service">

        <Home_Header></Home_Header>
        <Shop></Shop>
        <Preview></Preview>
  
  
      </div>
    );
  }
  
  export default Home_Service;