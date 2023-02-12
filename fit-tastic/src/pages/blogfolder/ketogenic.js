import React from 'react'
import './blogstyles2.css'
import './blogstyles.css'

export default function Ketogenic() {
  return (
    <div className="w3-container w3-padding-32 w3-center">
    <div>
      <h1><strong>Ketogenic</strong></h1>
      <img
      style={{  marginLeft: "auto",
        marginRight: "auto",
        width: 360,
        height: 360
      }}
        src="https://img.freepik.com/premium-photo/empty-rustic-bowl-with-low-carbs-ingredients-clean-eating-weight-loss-copy-space-top-view-keto-foods-meat-fish-avocado-cheese-vegetables-nuts-ketogenic-diet-concept-healthy-fats_92134-1018.jpg"
        alt="picture of Keto Ingredients"/>
      <br />
      <br />
      <a
        target="_blank"
        href="https://www.healthline.com/nutrition/ketogenic-diet-foods"
      >
        Link to Blog Post
      </a>
      <p>
        A diet high in fat and low in carbohydrates (sugars) that causes the
        body to break down fat into <br />
        molecules called ketones. Ketones circulate in the blood and become
        <br />
        the main source of energy for many cells in the body.
      </p>
    </div>
    <div>
      <ul id="remove">
        <li><strong>Some Foods:</strong></li>
        <li>Seafood</li>
        <li>Meat and poultry</li>
        <li>Eggs (Price: $0.42 / Count)</li>
        <li>Cheese (Price: $0.29 / Fl Oz)</li>
        <li>Plain Greek yogurt (Price: $0.11 / Ounce)</li>
        <li>Green leafy vegetables</li>
        <li>Peppers</li>
        <li>Nuts and seeds</li>
        <li>Berries</li>
        <li>Shirataki noodles (Price: $0.42 / Ounce)</li>
        <li>Dark chocolate and cocoa powder</li>
        <li>Olive oil (Price: $0.33 / Fl Oz)</li>
        <li>Butter and ghee (Price: $1.00 / Fl Oz)</li>
      </ul>
    </div>
  </div>
          )
}
