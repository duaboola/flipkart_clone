import React, { useEffect, useState } from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import LoginT from "./LoginT";
import MoreT from "./MoreT";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MicIcon from '@mui/icons-material/Mic';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const showvalue = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(showvalue);
    };
  }, [show]);

  const handleOpen = () => {
    setOpen(true);
  };

  const ShowLogin = () => {
    return (
      <>
        <div className="showLogin">
          <div className="showLogin__button">
            <button>LOGIN</button>
          </div>
          <div className="showLogin__info">
            <div>
              <p>New customer?</p>
            </div>
            <div>
              <p style={{ color: "#2874f0" }}>Sign Up</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="header">
      <div className="header__pc">
        <div className="first">
          <img
            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
            alt="Flipkart"
          />
          <div className="first1">
            <span
              style={{
                fontSize: "11px",
                paddingRight: "2px",
                color: "white",
                fontStyle: "italic",
              }}
            >
              Explore
            </span>
            <span
              style={{
                color: "#F9E107",
                fontSize: "11px",
                fontStyle: "italic",
              }}
            >
              Plus
            </span>
            <span>
              <img
                width="10"
                className="logo"
                src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="second">
          <input type="text" placeholder="Search for products,brands and more" />
          <SearchIcon />
        </div>
        <div className="third">
          {!show ? (
            <button onClick={handleOpen}>
              <Tippy
                content={<LoginT></LoginT>}
                interactive={true}
                offset={[5, 20]}
                theme="light"
                animation="scale"
              >
                <span>Login</span>
              </Tippy>
            </button>
          ) : (
            <Tippy
              content={<ShowLogin></ShowLogin>}
              interactive={true}
              theme="light"
              animation="perspective"
              visible={show}
            >
              <button>Login</button>
            </Tippy>
          )}
        </div>
        <div className="fourth">
          <p>Become a Seller</p>
        </div>
        <div className="fifth">
          <Tippy
            content={<MoreT></MoreT>}
            interactive={true}
            theme="light"
            offset={[5, 18]}
            animation="perspective"
          >
            <p className="tp">More</p>
          </Tippy>
          <ExpandMoreIcon />
        </div>
        <div className="sixth">
          <ShoppingCartIcon />
          <p style={{ color: "white", fontWeight: "600" }}>Cart</p>
        </div>
        <div className="modal"></div>
      </div>
      <div className="header__mob">
        <div className="hfirst">
            <ArrowBackIcon />
        </div>
        <div className="hsecond">
            <p>Mi Mobiles</p>
        </div>
        <div className="hthird">
            <SearchIcon />
        </div>
        <div className="hfourth">
            <MicIcon />
        </div>
        <div className="hfifth">
            <FavoriteIcon />
        </div>
        <div className="hsixth">
            <ShoppingCartIcon />
        </div>
      </div>
    </div>
  );
};
//<Modal open={open} handleClose={() => setOpen(false)} />

export default Header;
