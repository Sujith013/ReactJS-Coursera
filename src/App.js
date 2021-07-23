import React from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent.js';

function App() {
  return (
   
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'>
           my-app
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
