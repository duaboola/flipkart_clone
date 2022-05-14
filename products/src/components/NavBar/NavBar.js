import React from "react";
import "./NavBar.css"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CompareIcon from '@mui/icons-material/Compare';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';

const NavBar = () => {
  return <div className="navbar">
      <div className="navbar__pc">
        <div className="one">
            <p>Electronics</p>
            <ExpandMoreIcon />
        </div>
        <div className="two">
            <p>TVs & Appliances</p>
            <ExpandMoreIcon />
        </div>
        <div className="three">
            <p>Men</p>
            <ExpandMoreIcon />
        </div>
        <div className="four">
            <p>Women</p>
            <ExpandMoreIcon />
        </div>
        <div className="five">
            <p>Baby & Kids</p>
            <ExpandMoreIcon />
        </div>
        <div className="six">
            <p>Home & Furniture</p>
            <ExpandMoreIcon />
        </div>
        <div className="seven">
            <p>Sports, Books & More</p>
            <ExpandMoreIcon />
        </div>
        <div className="eight">
            <p>Flights</p>
        </div>
        <div className="nine">
            <p>Offer Zone</p>
        </div>
      </div>
      <div className="navbar__mob">
        <div className="one_m">
            <CompareIcon />
            <p>Compare</p>
        </div>
        <div className="two_m">
            <SortIcon />
            <p>Sort</p>
        </div>
        <div className="three_m">
            <FilterListIcon />
            <p>Filter</p>
        </div>
      </div>
    </div>;
};
export default NavBar;
