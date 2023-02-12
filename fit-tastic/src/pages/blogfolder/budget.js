import React from 'react'
import './blogstyles2.css'
import './blogstyles.css'

export default function Budget() {
  return (
    <div className="w3-container w3-padding-32 w3-center">
      <div>
        <h1><span><strong>Budget</strong></span></h1>
        <img
 style={{  marginLeft: "auto",
 marginRight: "auto",
 width: 360,
 height: 360
}}
          src="https://mommoneymap.com/wp-content/uploads/2020/09/cheapest-food-to-eat-on-a-budget.jpg"
          alt="pictures of budget foods"
        />
        <br />
        <br />
        <a
          target="_blank"
          href="https://eatwellspendsmart.com/cheap-grocery-list/"
        >
          Link to Blog Post
        </a>
      </div>
      <ul id="remove">
        <li>
          <strong><span>Fruits</span></strong>
          <ul id="remove">
            <li>Apples (Price: $3.12/3 lb. bag)</li>
            <li>Bananas (Price: $0.17/each)</li>
            <li>Oranges (Price: $3.29/3 lb. bag)</li>
            <li>Applesauce (Price: $1.98/46 oz)</li>
            <br />
          </ul>
        </li>
        <li>
         <strong> <span>Vegetables</span></strong>
          <ul id="remove">
            <li>Carrots (Price: $1.45/2 lb. bag)</li>
            <li>Onions (Price: $1.94/3 lb. bag)</li>
            <li>Potatoes (Price: $4.39/10 lb. bag)</li>
            <li>Sweet Potatoes (Price: $0.78/each)</li>
            <li>Cabbage (Price: $0.79/lb)</li>
            <li>Cucumbers (Price: $0.62/each)</li>
            <li>Celery (Price: $1.55/package)</li>
            <li>Yellow Squash (Price: $1.45/lb)</li>
            <li>Zucchini (Price: $1.45/lb)</li>
            <li>Corn (Price: $0.38/ear)</li>
            <br />
          </ul>
        </li>
        <li>
         <strong> <span>Frozen</span></strong>
          <ul id="remove">
            <li>Frozen Pea (Price: $0.77/12 oz bag)</li>
            <li>Frozen Broccoli (Price: $0.95/12 oz bag)</li>
            <li>Frozen Green Beans (Price: $0.80/12 oz bag)</li>
            <li>Frozen Mixed Vegetables (Price: $0.84/12 oz bag)</li>
            <br />
          </ul>
        </li>
      </ul>
    </div>
          )
}
