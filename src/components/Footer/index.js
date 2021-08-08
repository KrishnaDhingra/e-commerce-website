import "./footer.css";

function Footer() {
  return (
      <div className="footer">
          <div className="footer_inner">

          <div className="top_container">

            <div className="footer_logo"><img src="https://otmanezahhari.github.io/Audiophile/assets/shared/desktop/logo.svg" alt="Cart"/></div>

            <ul className="footer_ul">
                <li className="footer_first_link"><a>HOME</a></li>
                <li><a>HEADPHONES</a></li>
                <li><a>SPEAKERS</a></li>
                <li className="last_link"><a>EARPHONES</a></li>
            </ul>

          </div>

          <div className="bottom_container">
              
              <span className="footer_text">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</span>

              <div className="footer_images_container">
                  <div><img src="facebook.png" alt=""/></div>
                  <div><img src="twitter.png" alt=""/></div>
                  <div><img src="instagram.png" alt=""/></div>
              </div>
          </div>
          
          <div className="copyright_text_container">

              <div className="copyright_text">Copyright 2021. All Rights Reserved</div>

              <div className="footer_images_container2">
                  <div><img src="facebook.png" alt=""/></div>
                  <div><img src="twitter.png" alt=""/></div>
                  <div><img src="instagram.png" alt=""/></div>
              </div>

          </div>

          </div>
      </div>
  );
}

export default Footer;
