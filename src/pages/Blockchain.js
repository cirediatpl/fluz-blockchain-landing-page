import React, { Fragment } from "react";
import Hero from "../sections/Hero/Hero";
import Intro from "../sections/Intro/Intro";
import Erc from "../sections/Erc/Erc";
import Phone from "../sections/Phone/Phone";
import Network from "../sections/Network/Network";
import Network2 from "../sections/Network2/Network2";
import Secure from "../sections/Secure/Secure";


const Blockchain = () => {
    return (
      <Fragment>
        <Hero />
        <Intro />
        <Erc />
        <Phone />
        <Network />
        <Network2 />
        <Secure />
      </Fragment>
    );
  };
  
  export default Blockchain;