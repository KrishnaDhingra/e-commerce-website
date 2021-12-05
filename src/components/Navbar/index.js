import "./navbar.css";
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <div className="navbar">
      <nav>
        <div className="logo_hamburger_outer">

          <div className="hamburger_icon" onClick={() => props.onSelect()}>
            <div className="hamburger_lines"></div>
            <div className="hamburger_lines"></div>
            <div className="hamburger_lines"></div>
          </div>

          <Link to="/home">
            <div className="logo"><img src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/logo.svg" alt="Cart"/></div>
          </Link>

        </div>

        <ul className="nav_ul">
          <Link className="link-tag" to={{pathname: '/e-commerce-website'}}>
            <li className="first_link"><a>HOME</a></li>
          </Link>
          <Link className="link-tag" to={{pathname: '/headphones', state: {num:0, text:'HEADPHONES'}}}>
            <li><a>HEADPHONES</a></li>
          </Link>
          <Link className="link-tag" to={{pathname: '/speakers', state: {num:1, text:'SPEAKERS'}}}>
            <li><a>SPEAKERS</a></li>
          </Link>
          <Link className="link-tag" to={{pathname: '/earphones', state: {num:2, text:'EARPHONES'}}}>
            <li><a>EARPHONES</a></li>
          </Link>
        </ul>
        
        <div className="shopping_cart_icon_outer">
          <img src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/icon-cart.svg" alt="Cart"/>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
