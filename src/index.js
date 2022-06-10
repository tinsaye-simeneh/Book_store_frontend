import React, {useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/header'

function Book() {
  return <>
  <Header/>
  </>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Book/>
)