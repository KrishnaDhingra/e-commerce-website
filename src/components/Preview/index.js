import './preview.css'

function Preview(){
    return(
        <div className="preview">
            <div className="zx9_preview">
                <div className="zx9_left">
                    <img className="zx9_image" src='https://otmanezahhari.github.io/Audiophile/assets/home/desktop/image-speaker-zx9.png' alt=''/>
                </div>

                <div className="zx9_right">
                    <h1 className="zx9_heading">ZX9 speaker</h1>
                    <p className="zx9_content">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <button className="zx9_button">SEE PRODUCT</button>
                </div>
            </div>

            <div className="zx7_preview">

                <h1 className="zx7_heading">ZX7 SPEAKER</h1>
                <button className="zx7_button">SEE PRODUCT</button>
            </div>

            <div className="yx1_preview">
                <div className="yx1_left">
                    <img className="yx1_image" src='https://otmanezahhari.github.io/Audiophile/assets/home/desktop/image-earphones-yx1.jpg' alt=''/>
                </div>

                <div className="yx1_right">
                    <h1 className="yx1_heading">YXI EARPHONES</h1>
                    <button className="zx7_button">SEE PRODUCT</button>
                </div>
            </div>
        </div>
    )

}
export default Preview
