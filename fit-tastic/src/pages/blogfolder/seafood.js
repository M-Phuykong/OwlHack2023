import React from 'react'
import './blogstyles2.css'
import './blogstyles.css'

export default function Seafood() {
  return (
    <div className="w3-container w3-padding-32 w3-center">
      <div>
        <h1><strong>Seafood Free</strong></h1>
        <img
         style={{  marginLeft: "auto",
         marginRight: "auto",
         width: 360,
         height: 360
       }}
src='https://cdn-icons-png.flaticon.com/512/1971/1971017.png'
          alt="picture of seafood free"
        />
        <br />
        <br />
        <a
          target="_blank"
          href="https://www.chla.org/sites/default/files/atoms/files//CHLA-Shellfish-Free-Diet-2016.pdf"
        >
          Link to Blog Post
        </a>
        <p>
          There are hundreds of species of shellfish which people eat around the
          world, in our country the most <br />
          common shellfish allergens are Shrimp, Crab and Lobster.
        </p>
      </div>
      <div>
        <ul id="remove">
          <li><strong>Some Foods:</strong></li>
          <li>Peanut Butter ($2.48/lb)</li>
          <li>Eggs ($6/dozen)</li>
          <li>Chicken ($3.48/lb)</li>
          <li>Turkey ($1.70/lb)</li>
          <li>Beef ($4.60/lb)</li>
          <li>Black Beans ($0.09 / Ounce)</li>
          <li>Shiitake Mushrooms ($1.00 / Ounce)</li>
          <li>Cottage Cheese ($0.19 / Ounce)</li>
          <li>Lentils ($0.45 / Ounce)</li>
          <li>Milk ($0.04 / Ounce)</li>
          <li>Spinach ($0.50 / Ounce)</li>
          <li>Almonds ($0.31 / Ounce)</li>
        </ul>
      </div>
    </div>

    )
}
