import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
      <div className='home' >
        <div className="home__container">
            <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/14_horizontal_wide_images__h4x1_/others_6/nintendo_eshop_7/H4x1_NintendoeShop_WebsitePortal_enGB_image1600w.jpg"
            alt="" className="home__image" />

            <div className="home__row">
                <Product 
                    id="1"
                    title="Nintendo Switch – OLED Model w/ White Joy-Con"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61dYrzvBLbL._AC_UL320_.jpg"
                />
                <Product 
                    id="2"
                    title="Xbox Series X"
                    price={150.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61JGKhqxHxL._AC_UL320_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="3"
                    title="PlayStation 5 Console"
                    price={499.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51051FiD9UL._AC_UL320_.jpg"
                />
                <Product 
                    id="4"
                    title="PlayStation DualSense Wireless Controller – Midnight Black"
                    price={69}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_UL320_.jpg"
                />
                <Product 
                    id="5"
                    title="Nintendo Switch Pro Controller"
                    price={59.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61drpi3cYUL._AC_UL320_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="6"
                    title="PS5 Console- Horizon Forbidden West Bundlen"
                    price={549}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg"
                />
            </div>

        </div>
      </div>
  )
}

export default Home
