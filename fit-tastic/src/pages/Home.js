import React, {useState} from 'react';
import './Home.scss';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import Suggest from './Suggest';
import Recipe from '../components/Recipe';
import Shopping from './Shopping';

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


      <div className='joseph h-full' id="card_container">

        <Card component = {<Shopping/>} destination="shopping" title = "Get me a shopping list"></Card>
        <Card component = {<Suggest/>} destination ="suggest" title = "Suggest me a random meal to fill out my calorie requirement using AI!"></Card>
        <Card component = {<Recipe/>} destination="recipe" title = "Use my ingredients to give me a recipe!"></Card>
      </div>

    </div>
  );
}

export default Home;
