import React from 'react'
import './blogstyles2.css'
import './blogstyles.css'

export default function Vegetarian() {
  return (
    <div className="w3-container w3-padding-32 w3-center">
    <div>
      <h1><strong>Vegetarian</strong></h1>
      <img
       style={{  marginLeft: "auto",
       marginRight: "auto",
       width: 360,
       height: 360
     }}
        src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/vegetarian-diet-plan-1296x728-feature.jpg"
        alt="picture of items that are vegetarians"
      />
      <br />
      <br />
      <a
        target="_blank"
        href="https://gratefulgrazer.com/vegetarian-grocery-list/"
      >
        Link to Blog Post
      </a>
      <p>
        Compared with meat eaters, vegetarians tend to consume less saturated
        fat and cholesterol and more <br />
        vitamins C and E, dietary fiber, folic acid, potassium, magnesium, and
        <br />phytochemicals (plant chemicals), such as carotenoids and
        flavonoids.
      </p>
    </div>
    <div>
      <ul id="remove">
        <li>
          <strong>Fresh Produce</strong>
          <ul id="remove">
            <li>Spinach and Kale (Price: $12.77/lb)</li>
            <li>Onions (Price: $1.66/lb)</li>
            <li>Garlic (Price: $6.99/lb)</li>
            <li>Carrots (Price: $1.50/lb)</li>
            <li>Tomatoes (Price: $4.66/lb)</li>
            <br />
          </ul>
        </li>
        <li>
          <strong>Bakery:</strong>
          <ul id="remove">
            <li>Bread and/or buns/sandwich rolls (Price: $0.17/Oz)</li>
            <li>Tortillas (Price: $0.29/Oz)</li>
            <li>Dessert (Price: $0.80/Oz)</li>
            <br />
          </ul>
        </li>
        <li>
          <strong>Grains and Pulses:</strong>
          <ul id="remove">
            <li>Pasta (Price: $0.12/Oz)</li>
            <li>Oats (Price: $0.19/Oz)</li>
            <li>Rice (Price: $0.14/Oz)</li>
            <li>Popcorn (Price: $0.87/Oz)</li>
            <br />
          </ul>
        </li>
        <li>
          <strong>Beverages:</strong>
          <ul id="remove">
            <li>Coffee (Price: $0.58/Oz)</li>
            <li>Matcha (Price: $5.28/Oz)</li>
            <li>Sparkling water (Price: $0.09/Fl Oz)</li>
            <br />
          </ul>
        </li>
        <li>
          <strong>Refrigerated foods:</strong>
          <ul id="remove">
            <li>Tofu (Price: $0.14/Oz)</li>
            <li>Tempeh (Price: $0.42/Oz)</li>
            <li>
              Yogurt and/or dairy-free yogurt alternative. (Price:
              $0.18/Ounce)
            </li>
            <br />
          </ul>
        </li>
        <li>
          <strong>Other Pantry Staples:</strong>
          <ul id="remove">
            <li>Flour (Price: $0.05/Oz)</li>
            <li>Baking powder (Price: $0.15/Oz)</li>
            <li>Sugar (Price: $0.12/Oz)</li>
            <li>Maple syrup (Price: $0.81/Fl Oz)</li>
            <br />
          </ul>
        </li>
        <li>
          <strong>Snacks/Convenience Foods:</strong>
          <ul id="remove">
            <li>Tortilla chips and salsa (Price: $0.50/Oz)</li>
            <li>Dried fruit (Price: $1.90/Oz)</li>
            <li>Prepared soups (Price: $0.35/Oz)</li>
            <br />
          </ul>
        </li>
      </ul>
    </div>
  </div>
    )
}
