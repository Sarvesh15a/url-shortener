import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import About from './pages/About';



const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App