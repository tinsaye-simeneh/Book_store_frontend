import React from 'react';
import ReactDOM from 'react-dom'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import OtherPage from './components/Other_Page';
import Home from './components/HomePage/Home';
import BookAdding from './components/BookAdding';
import Profile from './components/Profile';

function Book() {

  return (
  <>
  <Header/>
  
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/about" element={<OtherPage />}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/bookadding" element={<BookAdding/>}/>
      <Route path="*" element={<Home/>} />
      </Routes>
    </Router>
    <Footer />
  </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Book/>
)