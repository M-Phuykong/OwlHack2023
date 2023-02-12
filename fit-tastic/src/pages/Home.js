import React, {useState} from 'react';
import './Home.scss';
import Card from '../components/Card';
import Suggest from './Suggest';
import Recipe from '../components/Recipe';
import Shopping from './Shopping';

import ShoppingList from "../assets/ShoppingList.png";
import SuggestPic from "../assets/SuggestPic.png";
import RecipePic from "../assets/RecipePic.png";

function Home() {

  const [showCard, setShowCard] = useState(false)

  return (
    <div className="App h-screen max-h-screen">

      <div className="area" >
              <ul className="circles">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
      </div >


      <div className='joseph h-full flex items-center' id="card_container">

        <Card component = {<Shopping/>}  image="https://media.discordapp.net/attachments/1073364304402845716/1074304893059354744/Suggest-1-6.png" title = "Get me a shopping list"></Card>
        <Card component = {<Suggest/>}  image="https://media.discordapp.net/attachments/1073364304402845716/1074306469689819136/Suggest-1-10.png" title = "Suggest me a random meal to fill out my calorie requirement using AI!"></Card>
        <Card component = {<Recipe/>}  image="https://media.discordapp.net/attachments/1073364304402845716/1074306157637812225/Suggest-1-9.png" title = "Use my ingredients to give me a recipe!"></Card>
      </div>

    </div>
  );
}

export default Home;
