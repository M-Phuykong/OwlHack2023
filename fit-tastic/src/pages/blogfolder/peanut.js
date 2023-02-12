import React from 'react'
import './blogstyles2.css'
import './blogstyles.css'

export default function Peanut() {
  return (
    <div className="w3-container w3-padding-32 w3-center">
      <div>
        <h1><strong>Peanut-Free</strong></h1>
        <img
 style={{  marginLeft: "auto",
 marginRight: "auto",
 width: 360,
 height: 360
}}
          src="https://www.yummytoddlerfood.com/wp-content/uploads/2021/07/peanut-free-snacks-on-countertop.jpg"
          alt="picture of items that are peanut-free"
        />
        <br />
        <br />
        <a
          target="_blank"
          href="https://www.purewow.com/food/peanut-butter-substitutes"
        >
          Link to Blog Post
        </a>
        <p>
          Peanuts can cause a severe, potentially life-threatening allergic
          reaction (anaphylaxis). Peanut <br />
          allergy is the most common food allergy in children under age 18 and
          the <br />third-most common food allergy in adults.
        </p>
      </div>
      <div>
        <ul id="remove">
          <li>
            <strong>Peanut Butter Alternatives:</strong>
            <ul id="remove">
              <li>Cookie Butter (Price: $10.97/14.1 Oz Jar)</li>
              <li>Coconut Butter (Price: $12.49/16 Oz Jar)</li>
              <li>Soy Butter (Price: $5.73/17.6 Oz Jar)</li>
              <li></li>
              <br />
            </ul>
          </li>
          <li>
            <strong>Seed Butter:</strong>
            <ul id="remove">
              <li>Sunflower Seeds (Price: $7.99/5.25 Oz)</li>
              <li>Chia Seeds (Price: $9.22/32 oz)</li>
              <li>Flax Seeds (Price: $4.99/16 oz)</li>
              <li>Pumpkin Seeds (Price: $2.44/5 oz)</li>
              <li>Hemp Seeds (Price: $17.49/ 18oz)</li>
              <br />
            </ul>
          </li>
          <li>
            <strong>Peanut Alternatives:</strong>
            <ul id="remove">
              <li>Beans (Price: $2.00/lb)</li>
              <li>Pretzels (Price: $3.28/16 oz)</li>
              <li>Tahini (Price: $4.74/16 oz)</li>
              <li>Seeds (Price: $4.24/16 oz)</li>
              <br />
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
