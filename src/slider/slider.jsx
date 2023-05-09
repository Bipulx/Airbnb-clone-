import React from "react";

import { Button, Menu, MenuItem } from "@material-ui/core";
import { FaAngleDown } from "react-icons/fa";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "false" : undefined}
        onClick={handleClick}
      >
        <FaAngleDown onClick={setHostClick} />
      </Button>

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
  );
}
