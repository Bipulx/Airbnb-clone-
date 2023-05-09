import React, { useState, useRef } from "react";
import "./header.css";
import { FaSistrix } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconButton, MenuItem, Button, Menu } from "@material-ui/core";

const Header = () => {
  const [countries, setCountries] = useState(false);
  const [form, setForm] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function setHostClick() {
    setCountries(!countries);
  }

  function formClick() {
    setForm(!form);
  }
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header-icon"
            src="https://media.cntraveler.com/photos/53e2f548c2d3f39d3610c04b/16:9/w_1280,c_limit/airbnb-logo-new.jpg"
            alt=""
          />
        </Link>

        <div className="header_center">
          <input type="text" name="" id="" />
          <FaSistrix />
        </div>

        <div className="header_right">
          <p style={{ fontSize: "16px" }}>Become a host</p>

          <div>
            <IconButton
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "false" : undefined}
              onClick={handleClick}
            >
              <FaAngleDown size={24} onClick={setHostClick} />
            </IconButton>

            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>Nepal</MenuItem>
              <MenuItem onClick={handleClose}>Usa</MenuItem>
              <MenuItem onClick={handleClose}>Brazil</MenuItem>
              <MenuItem onClick={handleClose}>Argentina</MenuItem>
              <MenuItem onClick={handleClose}>Saudi arab</MenuItem>
              <MenuItem onClick={handleClose}>India</MenuItem>
              <MenuItem onClick={handleClose}>China</MenuItem>
              <MenuItem onClick={handleClose}>Coretia</MenuItem>
              <MenuItem onClick={handleClose}>France</MenuItem>
              <MenuItem onClick={handleClose}>Netherlands</MenuItem>
              <MenuItem onClick={handleClose}>Portugal</MenuItem>
            </Menu>
          </div>

          <FaGlobe />
          <FaUserCircle onClick={formClick} />
        </div>
      </div>
    </>
  );
};

export default Header;
