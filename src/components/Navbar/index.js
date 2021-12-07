import React, { useState, useEffect } from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom'

function Navbar(props) {
  const [ num, setNum ] = useState(0)
  const [ visible, setVisible ] = useState(false)

  useEffect(() => {
    setNum(num + 1)
  }, JSON.parse(localStorage.getItem('d')))

  let total = "$0.00"
  let total_price = 0
  
  let calculateTotal = () => {

    if(!JSON.parse(localStorage.getItem('d'))){
      total = total
    }else{
      JSON.parse(localStorage.getItem('d')).map((element) => {
        let price = element.product_price
        price = price.replaceAll(",", "")
        price = price.replaceAll("$", "")
        price = parseInt(price)
        total_price = total_price + (price * parseInt(element.product_quantity))
      })
      total_price = `$${total_price}.00`
    }
    return total_price
  }

  total = calculateTotal()
  
  let change_counter = (effect, name, prevQuantity) =>{
    
    if(effect === 'decrease'){
      if(prevQuantity > 1){
        
        let data = JSON.parse(localStorage.getItem('d'))
        data.map(element => {
          if(element.product_name === name){
            element.product_quantity = element.product_quantity - 1
            console.log(element.product_quantity)
          }
        })
        localStorage.setItem('d', JSON.stringify(data))
        
      }else{
        console.log("nhi ho payega")
      }
      
    }else{

      let data = JSON.parse(localStorage.getItem('d'))
      data.map(element => {
        if(element.product_name === name){
          element.product_quantity = element.product_quantity + 1
          console.log(element.product_quantity)
        }
      })
      localStorage.setItem('d', JSON.stringify(data))
    }
    
  }
  
  
    let deleteData = () => {
      localStorage.setItem('d', null)
      total = "$0.00"
    }

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
                <h3>CART ({JSON.parse(localStorage.getItem('d')) === null ? 0 : JSON.parse(localStorage.getItem('d')).length})</h3>

                <a href="" className="remove_all" onClick={() => deleteData()}>Remove All</a>
              </div>

              {JSON.parse(localStorage.getItem('d')) === null && <h1 className="middle_section">YOUR CART IS EMPTY</h1>}
              {JSON.parse(localStorage.getItem('d')) && JSON.parse(localStorage.getItem('d')).map((element => {
                return (
                  <div className="cart_product_info">
                    <div className="cart_product_info_left_container">
                      <img className="cart_image" src={element.product_image} alt=""/>
                      <div className="name_price_container">
                        <h1 className="cart_product_name">{element.product_name.substring(0, 3)}</h1>
                        <h1 className="cart_product_price">{element.product_price}</h1>
                      </div>
                    </div>

                    <div className="cart_product_quantity">
                      <div className="decrease" onClick = {() => change_counter('decrease', element.product_name, element.product_quantity)}>-</div>
                      <div className="quantity_counter">{element.product_quantity}</div>
                      <div className="increase" onClick = {() => change_counter('increase', element.product_name, element.product_quantity)}>+</div>
                    </div>
                  </div>

                )
              }))}
              <div className="bottom_section">
                <h4 className="total">TOTAL</h4>
                <h3 className="total_amount">{total}</h3>
              </div>

            </div>
            <button className="checkout_button">{JSON.parse(localStorage.getItem('d')) === null ? 'FILL IT' : 'CHECKOUT'}</button>
          </div>}
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
