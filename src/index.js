import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/header'
import Footer from './components/footer'
import BookCard from './components/HomePage/BookCard';
import Home from './components/HomePage/Home';
function Book() {
  return <>
  <Header/>
  <Home />
  
  <Footer />
  </>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Book/>
)