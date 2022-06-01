import React from "react";
import star_img from "../images/star.png";

export default function Card(props) {

  let badge;
  if (props.item.openSpots === 0) {
    badge = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badge = "ONLINE";
  }

  return (
    <div className="card-img-section">
      {badge !== undefined && <div className="card--badge">{badge}</div>}
      <img className="card-img" src={props.item.coverImg} />
      <div className="card--stats">
        <img src={star_img} className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      {/* <div id="top-card-img">
           <p>SOLD OUT</p>
       </div> */}
      <p className="card--title">{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
