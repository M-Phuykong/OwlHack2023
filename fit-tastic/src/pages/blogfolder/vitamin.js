import React from 'react'
import './blogstyles2.css'
import './blogstyles.css'

export default function Vitamin() {
  return (
    <div className="w3-container w3-padding-32 w3-center">
      <div>
        <h1><strong>Vitamin Enriched</strong></h1>
        <img
               style={{  marginLeft: "auto",
               marginRight: "auto",
               width: 360,
               height: 360
             }}
          src="https://previews.123rf.com/images/ovocheva/ovocheva1508/ovocheva150800053/43043842-vitamins-and-minerals-foods-illustrator-set-10-vector-set-of-vitamin-rich-foods-vitamin-b6-bananas-s.jpg"
          alt="pictures of vitamin d"
        />
        <br />
        <br />
        <a target="_blank" href=""> Link to Blog Post </a>
        <p>
          Vitamin enriched foods help regulate the amount of calcium and
          phosphate in the body. These nutrients are needed <br />
          to keep bones, teeth and muscles healthy.
        </p>
      </div>
      <table>
        <tr>
          <td>Food</td>
          <td>Portion Size</td>
          <td>Vitamin D(International Units)</td>
        </tr>
        <tr>
          <td>Cod liver oil</td>
          <td>1 tbsp.</td>
          <td>1360 IU</td>
        </tr>
        <tr>
          <td>Halibut, Greenland, raw</td>
          <td>3 oz.</td>
          <td>932 IU</td>
        </tr>
        <tr>
          <td>Rainbow trout, freshwater</td>
          <td>3 oz.</td>
          <td>645 IU</td>
        </tr>
        <tr>
          <td>Salmon (various)</td>
          <td>3 oz.</td>
          <td>383-570 IU</td>
        </tr>
        <tr>
          <td>Canned tuna (light)</td>
          <td>3 oz.</td>
          <td>231 IU</td>
        </tr>
        <tr>
          <td>Herring</td>
          <td>3 oz.</td>
          <td>182 IU</td>
        </tr>
        <tr>
          <td>Egg yolk (dried)</td>
          <td>1 oz.</td>
          <td>178 IU</td>
        </tr>
        <tr>
          <td>Soy beverage (soy milk), unsweetened</td>
          <td>1 cup</td>
          <td>119 IU</td>
        </tr>
        <tr>
          <td>Yogurt, plain (nonfat or low fat)</td>
          <td>8 oz.</td>
          <td>116 IU</td>
        </tr>
        <tr>
          <td>Mushrooms, raw (various)</td>
          <td>1 cup</td>
          <td>114-1110 IU</td>
        </tr>
        <tr>
          <td>American Cheese, fortified (low fat or fat free)</td>
          <td>1.5 oz.</td>
          <td>85 IU</td>
        </tr>
        <tr>
          <td>
            Pork, fresh, loin, sirloin (roasts), bone-in, separable lean and
            fat, cooked.
          </td>
          <td>3 oz.</td>
          <td>25 IU</td>
        </tr>
      </table>
    </div>
      )
}
