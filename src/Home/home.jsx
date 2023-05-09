import React from "react";
import "./home.css";
import Banner from "../Banner/banner";
import Card from "../Cards/card";
const Home = () => {
  return (
    <>
      <Banner />

      <div className="home_section">
        <div className="col-span-4">
          <Card
            src="https://inspireddesigntalk-1999f.kxcdn.com/wp-content/uploads/2020/06/neutral-airbnb-with-two-beds-and-white-bedding-1200x8400-1-1024x717.jpg"
            title="uinique stayes"
            description="Spaces that are more then just a place to sleep"
          />
        </div>
        <div className="col-span-4">
          <Card
            src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/05/Airbnb-interior-design-ideas-Joshua-Tree-House.jpeg"
            title="Online Experince"
            description="unique activites we can do together,led by a world class"
          />
        </div>
        <div className="col-span-4">
          <Card
            src="https://media.cntraveler.com/photos/6295ab5e951217bbf4812101/3:2/w_1200,h_800,c_limit/Airbnb%2043240473%20-1.jpeg"
            title="Entires Home"
            description="Comfortable private place,with room friends and family"
          />
        </div>
        <div className="col-span-4">
          <Card
            src="https://media.cntraveler.com/photos/60481cc9676d0f0ac6c7ce67/1:1/w_900,h_900,c_limit/airbnb%2026870060.jpg"
            title="Yosomite National park"
            description="Comfortable private place,in national park"
          />
        </div>
        <div className="col-span-4">
          <Card
            src="https://a0.muscache.com/im/pictures/miso/Hosting-47728527/original/f87c9fec-c047-4003-ae19-c4507741fe97.jpeg?im_w=720"
            title="Fell like virgin in Virginia united states"
            description="Great place for young couple to cuddle "
          />
        </div>
        <div className="col-span-4">
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaGs2f6DE-f5TTwniLdWqjxi8u9hm3TerGBkHB3MQV6V_CuBtytO4gbGTSQjaVsV6Elg&usqp=CAU"
            title="Lake Lure Vacation"
            description="Comfortable private place,with room friends and family"
          />
        </div>
        <div className="col-span-4">
          <Card
            src="https://tremento.com/wp-content/uploads/2021/07/homey-1024x683.jpg"
            title="Best Interior "
            description="Comfortable private place,with room friends and family"
          />
        </div>
        <div className="col-span-4">
          <Card
            src="https://a0.muscache.com/im/pictures/7e5657dc-045d-48cc-a9d4-c91a6235a6c1.jpg?im_w=720"
            title="University  Vacation Rentels"
            description="Comfortable private place,with room friends and family"
          />
        </div>
        <div className="col-span-4">
          <Card
            src="https://a0.muscache.com/im/pictures/miso/Hosting-820362917410383485/original/6bec0906-57f7-4e5d-9095-cdbcd968158b.jpeg"
            title="Barns And More"
            description="Comfortable private place,with room friends and family"
          />
        </div>
        <div className="col-span-4">
          <Card
            src="https://www.myglobalviewpoint.com/wp-content/uploads/2020/11/the-coyote-house-yucca-valley-california.jpg"
            title="Southern California"
            description="Comfortable private place,with room friends and family"
          />
        </div>
        <div className="col-span-4">
          <Card
            src="https://a0.muscache.com/im/pictures/5c505262-3b4d-4943-b386-784eae100c0b.jpg?im_w=720"
            title="Eikenhof Vacation Rentals & Homes"
            description="Top-rated vacation rentals in Eikenhof"
          />
        </div>
        <div className="col-span-4">
          <Card
            src="https://hips.hearstapps.com/hmg-prod/images/6c9a9a99-9c38-417e-a7f5-a45ede9b3407-1532627926.jpg"
            title="The Most Unique Airbnbs You Can Rent Right Now"
            description="If you played Oregon Trail as a kid, get ready to lose your mind."
          />
        </div>
      </div>
    </>
  );
};

export default Home;
