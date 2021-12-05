import React, { useState } from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom'

function Navbar(props) {

  const [ visible, setVisible ] = useState(false)
  const [ total, setTotal] = useState(0)

  let total_price = 0
  if(JSON.parse(localStorage.getItem('d')).length === 0){
    setTotal('$0.00')
  }else{
    JSON.parse(localStorage.getItem('d')).map((element) => {
      let price = element.product_price
      price = price.replaceAll(",", "")
      price = price.replaceAll("$", "")
      price = parseInt(price)
      total_price = total + (price * parseInt(element.product_quantity))
    })
  }
  console.log(total_price)
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
          <img src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/icon-cart.svg" alt="Cart" onClick={() => setVisible(!visible)}/>

          {visible && <div className="cart">
            <div className="upper_container">

              <div className="upper_section">
                <h3>CART (2)</h3>
                <a href="" className="remove_all">Remove All</a>
              </div>

              {JSON.parse(localStorage.getItem('d')).length === 0 && <h1 className="middle_section">YOUR CART IS EMPTY</h1>}

              {JSON.parse(localStorage.getItem('d')).length > 0 && JSON.parse(localStorage.getItem('d')).map((element => {
                return (
                  <div>

                    <img src={element.product_image} alt=""/>
                    <h1>{element.product_name}</h1>
                    <h1>{element.product_price}</h1>
                    <h1>{element.product_quantity}</h1>
                  </div>

                )
              }))}
              <div className="bottom_section">
                <h4 className="total">TOTAL</h4>
                <h3 className="total_amount">$1000</h3>
              </div>

            </div>
            <button className="checkout">{JSON.parse(localStorage.getItem('d')).length === 0 ? 'FILL IT' : 'CHECKOUT'}</button>
          </div>}
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
