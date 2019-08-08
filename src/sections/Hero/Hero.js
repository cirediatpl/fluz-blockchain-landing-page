import React from "react";
import "./Hero.scss"
import background from "../../assets/fluz-blockchain-BG.png"
// import { SimpleImg } from "react-simple-img";

const Hero = () => {
    return (
        <section
            className="hero hero-container columns"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}
        >
            <div className="hero-text column is-one-third columns">
                <h1 className="is-size-1 has-text-weight-bold">Blockchain</h1>
                <h2 className="is-size-7 has-text-weight-light">The secure technology Fluz relies on.</h2>
            </div>
            {/* <div className="hero-image column">
                <SimpleImg
                    className="hero-image-content"
                    height={400}
                    placeholder="linear-gradient(180deg, #edb1b7 0%, #e9beae 70.93%, #e9d3c1 100%)"
                    src={blocks}
                    alt="blocks"
                />
            </div> */}
        </section>
    )
}

export default Hero;