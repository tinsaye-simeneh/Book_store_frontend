import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header'

function Book() {
  return(
    <React.Fragment>
    <Header/>
    </React.Fragment>
  )
  }
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Book/>
)