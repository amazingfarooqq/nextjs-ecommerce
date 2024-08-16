import React from 'react'

const HeroSection = () => {
    return (
        <section id="home">
            <div className="home_page ">
                <div className="home_img ">
                    <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img " />
                </div>
                <div className="home_txt ">
                    <p className="collectio ">SUMMER COLLECTION</p>
                    <h2>
                        FALL - WINTER
                        <br />
                        Collection 2023
                    </h2>
                    <div className="home_label ">
                        <p>
                            A specialist label creating luxury essentials. Ethically crafted
                            <br />
                            with an unwavering commitment to exceptional quality.
                        </p>
                    </div>
                    <button>
                        <a href="#sellers">SHOP NOW</a>
                        <i className="bx bx-right-arrow-alt" />
                    </button>
                    <div className="home_social_icons">
                        <a href="#">
                            <i className="bx bxl-facebook" />
                        </a>
                        <a href="#">
                            <i className="bx bxl-twitter" />
                        </a>
                        <a href="#">
                            <i className="bx bxl-pinterest" />
                        </a>
                        <a href="#">
                            <i className="bx bxl-instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection