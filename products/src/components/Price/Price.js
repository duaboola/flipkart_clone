import React from 'react';
import Slider from '@material-ui/core/Slider';
import "./Price.css";

const Price = () => {

// Our States
const [value, setValue] = React.useState([0,50000]);

// Changing State when volume increases/decreases
const rangeSelector = (event, newValue) => {
	setValue(newValue);
	console.log(newValue)
};

return (
	<div name="price_slider">
        <div className="price_head">
            <h6>PRICE</h6>
        </div>
        <div className="range">
            <div className="i1">
                
            </div>
        </div>
        <div className="sli">
            <Slider
                value={value}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
            />
        </div>
        <div className="price_label">
            <div className="min">
            {value[0]}
            </div>
            <div className="max">
            {value[1]}  
            </div>
        </div>
        

	    
	</div>
    
);
}

export default Price;
