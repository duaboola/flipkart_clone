import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "./CardTitle.css";
import Tabs from "../Tabs/Tabs"

const CardTitle = () => {
  return (
    <div className="CardTitle">
        <div className="ct_one">
            <p>Home</p>
            <NavigateNextIcon />
            <p>Mobile & Accesories</p>
            <NavigateNextIcon />
            <p>Mobiles</p>
        </div>
        <div className="ct_two">
            <p>Redmi Mobile Phones Under 10000 |  Redmi Mobile Phones Under 15000 |  Redmi Mobile Phones Under 20000</p>
        </div>
        <div className="ct_three">
            <h3>Mi Mobiles <t/> </h3>
            <p>&nbsp;&nbsp; (Showing 1 – 24 products of 380 products)</p>
        </div>
        <div className="ct_four">
            <Tabs />
        </div>
    </div>
  )
}

export default CardTitle