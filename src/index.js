import React from 'react';
import ReactDOM from 'react-dom'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import OtherPage from './components/Other_Page';
import Home from './components/HomePage/Home';
import BookAdding from './components/BookAdding';

// didn't route BookAdding page because it needs it requires user login
function Book() {

  return (
  <>
  <Header />
  
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/about" element={<OtherPage />}/>
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