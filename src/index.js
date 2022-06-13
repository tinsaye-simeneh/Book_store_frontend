import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/header'
import { Profile } from './components/Profile';
import Footer from './components/footer'

function Book() {

  return (
  <>
  <Header/>
  <Profile/>
  <Footer/>
  </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Book/>
)