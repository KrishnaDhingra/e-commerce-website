import React, { useState } from 'react'
import Showcase from "../../components/Showcase/index.js";
import Showcase_Header from "../../components/Showcase_Header/index.js";
import { Shop }  from "../../components/Shop/index.js";
import {shop} from '../../data'

function Showcase_Service(props) {

  return (
    <div className="showcase_service">

      <Showcase_Header text={props.location.state.text}></Showcase_Header>

      {shop[props.location.state ? props.location.state.num : 0].map(element => {
        return(

          <Showcase key={element.name} image={element.desktop_image} name={element.name} info={element.description}></Showcase>
        )
      })}

      <Shop></Shop>


    </div>
  );
}

export default Showcase_Service;