import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="navbar">
      <nav>

        <div className="hamburger_icon"><img src="menu.png" alt="menu"/></div>
        <div className="logo"><img src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/logo.svg" alt="Cart"/></div>
        <ul>
          <li className="first_link"><a>HOME</a></li>
          <li><a>HEADPHONES</a></li>
          <li><a>SPEAKERS</a></li>
          <li><a>EARPHONES</a></li>
        </ul>
        <div className="shoping_cart_icon_outer">
          <img src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/icon-cart.svg" alt="Cart"/>
        </div>
      </nav>
    </div>
  );
}

export default App;
