import React from 'react'
import Login from './components/Login'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';

const App = () => {
  return (<BrowserRouter>
<Routes>
<Route path='/' element={<Login />}></Route>
<Route path='/Homepage' element={<Homepage />}></Route>
</Routes>

  </BrowserRouter>
  )
}

export default App
