import React from 'react'
import './blogstyles2.css'
import './blogstyles.css'

export default function Dairy() {
  return (
    <div className="w3-container w3-padding-32 w3-center">
      <div>
        <h1><strong>Dairy-Free</strong></h1>
        <img
         style={{  marginLeft: "auto",
         marginRight: "auto",
         width: 360,
         height: 360
       }}
          src="https://oleoscope.com/wp-content/uploads/2020/07/snimok-jekrana-2020-07-29-v-17.59.38-390x280.png"
          alt="picture of items that are dairy-free"
        />
        <br />
        <br />
        <a
          target="_blank"
          href="https://camillestyles.com/food/dairy-free-alternatives/"
        >
          Link to Blog Post
        </a>
        <p>
          Dairy-free products contain no milk or milk products. Typically,there
          products are made using plants, <br />
          nuts, and grains. For example, most almond milk beverages are <br />
          considered to be dairy free alternatives.
        </p>
      </div>
      <div>
        <ul id="remove">
          <li>
            <strong>Cheese Alternatives:</strong>
            <ul id="remove">
              <li>Monty's Original Cream Cheese (Price: $1.12 / Ounce)</li>
              <li>Herb-Garlic Vegan Nut Cheese (Price: $0.90 / Ounce)</li>
              <li>Kite Hill Chive Cream Cheese (Price: $0.84 / Ounce)</li>
              <br />
            </ul>
          </li>
          <li>
            <strong>Milk Alternatives:</strong>
            <ul id="remove">
              <li>Malibu Mylk Oat + Flax Milk (Price: $0.16 / Fl Oz)</li>
              <li>
                Califia Farms Toasted Coconut Almondmilk (Price: $0.13 / Fl Oz)
              </li>
              <li>Minor Figures Oat Milk (Price: $0.14 / Ounce)</li>
              <li>
                Oatly Original Barista Edition Oatmilk (Price: $0.13 / Ounce)
              </li>
              <br />
            </ul>
          </li>
          <li>
            <strong>Cream Alternatives:</strong>
            <ul id="remove">
              <li>Kite Hill Sour Cream (Price: $0.56 / Ounce)</li>
              <li>Forager Dairy-Free Sour Cream (Price: $0.48 / Ounce)</li>
              <br />
            </ul>
          </li>
          <li>
            <strong>Heavy Cream Alternatives:</strong>
            <ul id="remove">
              <li>Organic Coconut Milk (Price: $0.10 / Ounce)</li>
              <li>Oatly Organic Cooking Cream (Price: $2.12 / Fl Oz)</li>
              <br />
            </ul>
          </li>
          <li>
            <strong>Butter Alternatives:</strong>
            <ul id="remove">
              <li>
                Miyoko's Europeans Style Cultured Vegan Butter Sticks (Price:
                $0.71 / Fl Oz)
              </li>
              <li>
                Earth Balance Organic Buttery Spread (Price: $0.46 / Ounce)
              </li>
              <li>
                Good & Gather Plant-Based Organic Non-Dairy Buttery Spread
                (Price: $0.64 / Ounce)
              </li>
              <br />
            </ul>
          </li>
          <li>
            <strong>Whipping Cream Alternatives:</strong>
            <ul id="remove">
              <li>So Delicious Dairy Free Cocowhip (Price: $0.55/Oz)</li>
              <li>
                Pastry Pride Non-Dairy Ready to Whip Topping (Price: $0.12/Oz)
              </li>
              <li>
                Reddi-wip Almond Milk Non-Dairy Whipped Cream (Price:
                $12.14/Count)
              </li>
              <li>
                Silk Dairy-Free Heavy Whipping Cream Alternative (Price:
                $4.28/Count)
              </li>
              <br />
            </ul>
          </li>
          <li>
            <strong>Sweetened Condensed Milk Alternatives:</strong>
            <ul id="remove">
              <li>Sweetened Condensed Coconut Milk (Price: $0.44 / Ounce)</li>
              <li>
                nutpods Unsweetened French Vanilla Creamer (Price: $0.42 / Fl
                Oz)
              </li>
              <li>
                Califia Farms Better Half Original Coconut Cream & Almondmilk
                (Price: $0.17 / Fl Oz)
              </li>
              <br />
            </ul>
          </li>
        </ul>
      </div>
    </div>
              )
}
