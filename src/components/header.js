import React from 'react';
import logo from '../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Header = () => {
 return(
    <React.Fragment>

      
<nav class='navbar navbar-expand-lg navbar-light' style={{backgroundColor: 'white'}}>

<div class="container">

    <a className='navbar-brand' href='Home'>
      <img
        src={logo}
        height="45"
        alt="Logo"
      />
    </a>

    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
    
    <form class="d-flex input-group m-auto " 
    style={{
      width:'80%'
    }}>
    <input
      type="search"
      class="form-control rounded"
      placeholder='Search...'
    />
    <button class='input-group-text ms-2 text-white rounded' style={{backgroundColor: '#103037'}} id="search-addon">
      <SearchIcon 
      style={{ color: 'white' }}
      />
      Search
    </button>
  </form>

  <div class='navbar-nav'>
      <a className='ms-5 text-decoration-none' style={{color: '#103037'}} href='Profile'>
        <PersonOutlinedIcon
        style={{ color: '#103037' }}
        />
        Account
      </a>
  </div>

</div>
</div>

</nav>


    </React.Fragment>
  )
};
export default Header;
