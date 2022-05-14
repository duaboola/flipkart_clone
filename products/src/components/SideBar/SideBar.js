import React from 'react'
import "./SideBar.css";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Price from "../Price/Price";
import Accordion from '../Basics/Accordion/Accordion';
import { accordionData } from "./AccordionContent"
import Brand from './Brand/Brand';
import Dropdown from './Dropdown';
const SideBar = () => {
  return (
    <div className="Sidebar">
      <div className="sfirst">
        <div className="sfirst_one">
          <h4>Filters</h4>
          <p>CLEAR ALL</p>
        </div>
        <div className="sfirst_two">
          <CloseIcon />
          <p>Min-Rs50000+</p>
        </div>
      </div>
      <div className="ssecond">
        <div className="ssecond_one">
          <h6>CATEGORIES</h6>
        </div>
        <div className="ssecond_two">
          <ArrowBackIosIcon />
          <p>Mobiles & Accesories</p>
        </div>
        <div className="ssecond_three">
          <h6>Mobiles</h6>
        </div>
      </div>
      <div className="third">
        <Price />
      </div>
      <div className="fourth">
      <Dropdown />
      
      </div>
    </div>
  )
}

export default SideBar