import React from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Dropdown.css";
const Dropdown = () => {
  return (
    <div className="dropdown">
        <div className="brand">
            <div className="brand_title">
                <h5>BRAND</h5>
                <ExpandMoreIcon />
            </div>
            <div className="brand__body">
                <input type="checkbox" id="brand" name="brand" value="Mi" />Mi
            </div>
        </div>
        <div className="customer">
            <div className="customer_title">
                <h5>CUSTOMER RATING</h5>
                <ExpandMoreIcon />
            </div>
            <div className="customer__body">
                <div className="r1">
                    <input type="checkbox" id="customer" name="customer" value="4" />4 & above
                </div>
                <div className="r2">
                    <input type="checkbox" id="customer" name="customer" value="3" />3 & above
                </div>
                <div className="r3">
                    <input type="checkbox" id="customer" name="customer" value="2" />2 & above
                </div>
                <div className="r4">
                    <input type="checkbox" id="customer" name="customer" value="1" />1 & above
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dropdown