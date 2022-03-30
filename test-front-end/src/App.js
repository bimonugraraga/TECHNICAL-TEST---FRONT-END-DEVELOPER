import './App.css';
import './styling/Home.css'
import HomeScreen from './view/Home';
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import DetailScreen from './view/Detail';
import AddScreen from './view/Add';
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/:id' element={<DetailScreen />}/>
          <Route path='/add' element={<AddScreen />}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
