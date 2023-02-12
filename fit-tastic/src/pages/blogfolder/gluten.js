import React from 'react'
import './blogstyles2.css'
import './blogstyles.css'

export default function Gluten() {
  return (
    <div className="w3-container w3-padding-32 w3-center">
      <div>
        <h1><strong>Gluten-Free</strong></h1>
        <img
         style={{  marginLeft: "auto",
         marginRight: "auto",
         width: 360,
         height: 360
       }}
          src="https://onnitacademy.imgix.net/wp-content/uploads/2020/11/snacksopener.jpg"
          alt="picture of gluten-free snacks"
        />
        <br />
        <br />
        <a
          target="_blank"
          href="https://www.wholefoodsmarket.com/special-diets/gluten-free/what-is-gluten-free"
        >
          Link to Blog Post
        </a>
        <p>
          A gluten-free diet excludes any foods that contain gluten, which is a
          protein found in wheat and <br />
          several other grains. It means eating only whole foods that don't
          contain <br />
          gluten, such as fruits, vegetables, meat and eggs, as well as
          <br />processed gluten-free foods like gluten-free breads and pasta.
        </p>
      </div>
      <div>
        <ul id="remove">
          <li><strong>Some Foods:</strong></li>
          <li>Fruits and vegetables</li>
          <li>Meat and Poultry</li>
          <li>Eggs</li>
          <li>Dairy(milk, cheese, butter)</li>
          <li>
            Some whole grains (quinoa, sorghum, buckwheat, amaranth, teff, corn,
            brown rice)
          </li>
          <li>Gluten-free pasta and bread</li>
        </ul>
      </div>
    </div>
          )
}
