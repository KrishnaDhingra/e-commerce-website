import './shop.css';

function Shop() {
  return (
    <div className="shop">

        <div className="shop_inner">
            <img className="shop_image" id="image1" src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/image-headphones.png" alt=""/>
            <div className="shop_product_name">HEADPHONES</div>

            <div className="shop_link_outer">

              <a className="shop_link">shop</a>
              <span className="arrow">></span>

            </div>
        </div>

        <div className="shop_inner">
            <img className="shop_image" id="image2" src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/image-speakers.png" alt=""/>
            <div className="shop_product_name">SPEAKERS</div>

            <div className="shop_link_outer">

              <a className="shop_link">shop</a>
              <span className="arrow">></span>

            </div>
        </div>

        <div className="shop_inner">
            <img className="shop_image" id="image3" src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/image-earphones.png" alt=""/>
            <div className="shop_product_name">EARPHONES</div>

            <div className="shop_link_outer">

              <a className="shop_link">shop</a>
              <span className="arrow">></span>

            </div>
        </div>

    </div>
  );
}

export default Shop;
