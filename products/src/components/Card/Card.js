import "./Card.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import CircleIcon from '@mui/icons-material/Circle';

const Card=({photo, title,rating,review,d1,d2,d3,d4,d5,d6,price,offer}) => {
    return (
      <div className="card">
        <div className="card__pc">
            <img src={photo} className="card__img" />
            <FavoriteIcon />
            <div className="card__body">
                <div className="card_L">
                    <h2 className="card__title">{title}</h2>
                    <div className="card__rating">
                        <div className="rating">
                            <p>{rating}</p>
                            <StarIcon />
                        </div>
                        <div className="review">
                            <p>&nbsp;&nbsp;{review}</p>
                        </div>
                    </div>
                    <div className="card__description">
                        <div className="ds1">
                            <CircleIcon />
                            <p className="d1">&nbsp;&nbsp;{d1}</p>
                        </div>
                        <div className="ds2">
                            <CircleIcon />
                            <p className="d2">&nbsp;&nbsp;{d2}</p>
                        </div>
                        <div className="ds3">
                            <CircleIcon />
                            <p className="d3">&nbsp;&nbsp;{d3}</p>
                        </div>
                        <div className="ds4">
                            <CircleIcon />
                            <p className="d4">&nbsp;&nbsp;{d4}</p>
                        </div>
                        <div className="ds5">
                            <CircleIcon />
                            <p className="d5">&nbsp;&nbsp;{d5}</p>
                        </div>
                        <div className="ds6">
                            <CircleIcon />
                            <p className="d6">&nbsp;&nbsp;{d6}</p>
                        </div>
                    </div>
                </div>
            
                <div className="card__R">
                    <div className="p1">
                        <h2 className="card__price">₹{price}</h2>
                    </div>
                    <div className="p2">
                        <h5 className="card__offer">₹{offer}</h5>
                        <p>&nbsp;&nbsp;5% off</p>
                    </div>
                    <div className="p3">
                        <h6>Free Delivery</h6>
                        <p>Bank Offer</p>
                    </div>
                </div>
                <div className="assured">
                    <img src="https://www.adgully.com/img/800/68264_fl.png.jpg" />
                </div>
                <div className="compare">
                <input type="checkbox" id="topping" name="topping" value="Paneer" />Add to Compare
                </div>
            </div>
        </div>
        <div className="card__mob">
            <img src={photo} className="card__img" />
            <div className="card__body">
                <div className="card_L">
                    <h2 className="card__title">{title}</h2>
                    <div className="card__rating">
                        <div className="rating">
                            <p>{rating}</p>
                            <StarIcon />
                        </div>
                        <div className="review">
                            <p>&nbsp;&nbsp;{review}</p>
                        </div>
                    </div>
                    <div className="card__description">
                        <div className="ds1">
                            <p className="d1">&nbsp;&nbsp;{d1}</p>
                        </div>
                        <div className="ds2">
                            <p className="d2">&nbsp;&nbsp;{d2}</p>
                        </div>
                        <div className="ds3">
                            <p className="d3">&nbsp;&nbsp;{d3}</p>
                        </div>
                        <div className="ds4">
                            <p className="d4">&nbsp;&nbsp;{d4}</p>
                        </div>
                        <div className="ds5">
                            <p className="d5">&nbsp;&nbsp;{d5}</p>
                        </div>
                    </div>
                </div>
            
                <div className="card__R">
                    <div className="p2">
                        <h4 className="card__offer">₹{offer}</h4>
                        <div className="p1">
                            <h4 className="card__price">₹{price}</h4>
                        </div> 
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;5% off</p>
                    </div>
                    
                    <div className="p3">
                        <h6>Free Delivery</h6>
                        <p>Bank Offer</p>
                    </div>
                </div>
                <div className="assured">
                    <img src="https://www.adgully.com/img/800/68264_fl.png.jpg" />
                </div>
                <div className="compare">
                <input type="checkbox" id="topping" name="topping" value="Paneer" />Add to Compare
                </div>
                <div className="Circle">
                    <CircleIcon />
                </div>
                <div className="Heart">
                    <FavoriteIcon />
                </div>
            </div>
        </div>
      </div>
    );
  }

  export default Card;

  