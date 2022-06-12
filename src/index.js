import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/header'
import { BookAdding } from './components/BookAdding';

function Book() {

  const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    width: '100vw',
    maxHeight: 'calc(100vh)',
    overflowY: 'auto',
    overflow: 'scroll',
    textAlign: 'center',
    color: '#103037',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    color:'black',
    border: 'none',
    textDecoration: 'underline'
  };


  return (
  <>
  <Header/>
  <BookAdding/>
  </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Book/>
)