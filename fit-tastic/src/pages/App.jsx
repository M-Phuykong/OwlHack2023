import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import Suggest from './Suggest';
import Recipe from '../components/Recipe';
import Home from './Home';
import Shopping from './Shopping';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='suggest' element={<Suggest/>}></Route>
          <Route path='shopping' element={<Shopping/>}></Route>
          <Route path='recipe' element={<Recipe/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
