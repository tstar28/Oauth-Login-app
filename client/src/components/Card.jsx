import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Card = ({ post }) => {
  return (
    <div className="card">
      <Link to={`/post/${post.id}`} className="link">
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="desc">{post.desc}</p>
        <button className="cardbutton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
