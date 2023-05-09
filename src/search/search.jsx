import React from "react";
import "./search.css";
import { Button } from "@material-ui/core";
import SearchResult from "./searchresult";
const Search = () => {
  return (
    <>
      <div className="searchpage">
        <div className="searchpage-info">
          <p>62 stays , 26 august to 30 august , 2 guest</p>
          <h1>Stays nearby</h1>

          <Button variant="outlined">Cancelletion flexibility</Button>
          <Button variant="outlined">Type of place </Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined">Rooms and bed</Button>
          <Button variant="outlined">More Filters</Button>
        </div>
      </div>

      <SearchResult
        img={
          "https://www.roadaffair.com/wp-content/uploads/2022/01/airbnb-bucharest-romania-1024x683.jpg"
        }
        location="Usa"
        title="Stays in this specious House"
        description="These amazing Airbnb’s in Taiwan will ensure that your stay is as memorable as it can get."
        price="£60/night"
        star="4.9"
        total="140 total"
      />
      <SearchResult
        img={
          "https://www.veronikasadventure.com/wp-content/uploads/2020/04/Taiwan-Airbnb-6-Alishan.jpg"
        }
        location="Chille"
        title="Vernoki's Adventure"
        description="A curated list of the best Sofia Airbnb apartments, all with a stylish interior, superb location, outstanding reviews, and sparkling city views."
        price="£30/night"
        star="3.9"
        total="117 total"
      />
      <SearchResult
        img={
          "https://imgix.theurbanlist.com/content/article/10813aa4-cc43-4649-a6f8-d1813cdd2f74.jpeg"
        }
        location="Swizerland"
        title="Sunshine Coast"
        description="If there’s one thing we’re seeking in a Sunshine Coast getaway, it’s that one-of-a-kind roof over our head"
        price="£10/night"
        star="2.5"
        total="99 total"
      />
      <SearchResult
        img={
          "https://media.cntraveler.com/photos/6295ab5e951217bbf4812101/3:2/w_1200,h_800,c_limit/Airbnb%2043240473%20-1.jpeg"
        }
        location="India"
        title="Conde Nast Travlller"
        description="A curated list of the best Sofia Airbnb apartments, all with a stylish interior, superb location, outstanding reviews, and sparkling city views."
        price="£40/night"
        star="4.2"
        total="120 total"
      />
      <SearchResult
        img={
          "https://media.architecturaldigest.com/photos/5fdba5629542eda0bedf1080/1:1/pass/undefined"
        }
        location="Dubai"
        title="Stays in this Hot Temp "
        description="From an airy Venice loft to a romantic Topanga getaway, these vacation homes offer something for every traveler"
        price="£80/night"
        star="4.5"
        total="217 total"
      />
      <SearchResult
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99Yhfu6cnAs9gz5BqcMPOI9GGsxuh_hIxjELkYnTJkqrXzs3g_MvJJYjd25v9MVYDZzc&usqp=CAU"
        }
        location="kathmandu"
        title="Childcare specialist place"
        Airbnb
        Luxe
        description="These Airbnbs come with your own trip designer and add-on perks like a driver, concierge, and childcare.
BY MEREDITH CAREY"
        price="£45/night"
        star="4.0"
        total="107 total"
      />
    </>
  );
};

export default Search;
