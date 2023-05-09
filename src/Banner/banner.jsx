import React, { useState } from "react";
import "./banner.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import Search from "./Date";
const Banner = () => {
  const [search, setSearch] = useState(false);
  return (
    <>
      {search && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
          className="select-date"
        >
          <h1 style={{ fontSize: "16px", fontWeight: "600", color: "#ff7779" }}>
            Select a Date
          </h1>
          <Search />
        </div>
      )}

      <div className="banner">
        <div className="banner_search">
          <Button
            onClick={() => setSearch(!search)}
            variant="outlined"
            className="banner_searchButton"
          >
            {!search ? "ShowDates" : "HideDates"}
          </Button>
        </div>
        <div className="banner_info">
          <h1>Get out and stretch your imagination</h1>

          <h5>
            plan a diffrent kind of getaway to uncover thee hidden gems near
            you.
          </h5>
          <Link to="/search">
            <Button>EXPLORE NEARBY</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
