import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import Suggest from './Suggest';
import Recipe from '../components/Recipe';
import Home from './Home';
import Shopping from './Shopping';

import Peanut from './blogfolder/peanut';
import Vegetarian from './blogfolder/vegetarian'
import Budget from './blogfolder/budget'
import Seafood from './blogfolder/seafood'
import Ketogenic from './blogfolder/ketogenic'
import Vitamin from './blogfolder/vitamin'
import Gluten from './blogfolder/gluten'
import Dairy from './blogfolder/dairy'






export default function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='dairy' element = {<Dairy />}></Route>
        <Route path='ketogenic' element = {<Ketogenic />}></Route>
        <Route path='vitamin' element = {<Vitamin/>}></Route>
        <Route path='gluten' element = {<Gluten />}></Route>
        <Route path='seafood' element = {<Seafood />}></Route>
        <Route path='budget' element = {<Budget/>}></Route>
        <Route path='vegetarian' element ={<Vegetarian/>}></Route>
        <Route path='peanut' element ={<Peanut/>}></Route>


          <Route path='/' element={<Home/>}></Route>
          <Route path='suggest' element={<Suggest/>}></Route>
          <Route path='shopping' element={<Shopping/>}></Route>
          <Route path='recipe' element={<Recipe/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
