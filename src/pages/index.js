import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src="scr/img/girl.jpg" alt="" />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
