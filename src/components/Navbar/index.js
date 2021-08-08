import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo_hamburger_outer">

          <div className="hamburger_icon">
            <div className="hamburger_lines"></div>
            <div className="hamburger_lines"></div>
            <div className="hamburger_lines"></div>
          </div>

          <div className="logo"><img src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/logo.svg" alt="Cart"/></div>

        </div>

        <ul className="nav_ul">
          <li className="first_link"><a>HOME</a></li>
          <li><a>HEADPHONES</a></li>
          <li><a>SPEAKERS</a></li>
          <li><a>EARPHONES</a></li>
        </ul>
        
        <div className="shopping_cart_icon_outer">
          <img src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/icon-cart.svg" alt="Cart"/>
        </div>
      </nav>

      <div className="header">
        <img className="hero_image" src="https://github.com/otmanezahhari/Audiophile/blob/master/src/assets/home/desktop/image-hero.jpg" alt="hero_image"/>
      </div>
    </div>
  );
}

export default Navbar;
