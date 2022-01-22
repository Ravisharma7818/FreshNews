import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React, { Component } from 'react'

// let a="sports"
export default class App extends Component {


  render() {
    return (
      <>
        <NavBar />
        <BrowserRouter>
          <div className="container">
            <Routes>

              <Route path='/' element={<News category="sports" api="https://newsapi.org/v2/top-headlines?country=us&apiKey=652afb1ac0fe4a6793d43a6f3009f5db" />} />
              <Route path="/about" element={<About/>}/>
              <Route path='/business' element={<News category="business" api="https://newsapi.org/v2/top-headlines?country=us&apiKey=652afb1ac0fe4a6793d43a6f3009f5db" />} /><Route />
              <Route path='/entertainment' element={<News category="entertainment" api="https://newsapi.org/v2/top-headlines?country=us&apiKey=652afb1ac0fe4a6793d43a6f3009f5db" />} /><Route />
              <Route path='/general' element={<News category="general" api="https://newsapi.org/v2/top-headlines?country=us&apiKey=652afb1ac0fe4a6793d43a6f3009f5db" />} /><Route />
              <Route path='/health' element={<News category="health" api="https://newsapi.org/v2/top-headlines?country=us&apiKey=652afb1ac0fe4a6793d43a6f3009f5db" />} /><Route />
              <Route path='/science' element={<News category="science" api="https://newsapi.org/v2/top-headlines?country=us&apiKey=652afb1ac0fe4a6793d43a6f3009f5db" />} /><Route />
              <Route path='/technology' element={<News category="technology" api="https://newsapi.org/v2/top-headlines?country=us&apiKey=652afb1ac0fe4a6793d43a6f3009f5db" />} /><Route />



            </Routes>
          </div>
        </BrowserRouter>,


      </>

    )
  }
}

