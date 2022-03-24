import React from "react";
import "./Other-pages.css"
import { Link } from 'react-router-dom';

const NoPage = () => {
  return(
    <div className="NoPage">
      <h1>404</h1>
      <h1 className="notfound">not found</h1>
      <Link className="BackToHome" to="/">Back To Home</Link>
    </div> 
  )
};

export default NoPage;