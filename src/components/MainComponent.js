/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import Home from './HomeComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent.js';
import { DISHES } from '../shared/dishes.js';
import DishDetailComponent from './DishDetailComponent.js';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
  

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
    }
  }

  render() {
  
   const HomePage=()=>{

     return(

      <Home />

     );
   }

    return (
   
    <div>
    <Header />
       <Switch>
       <Route path="/home" component={HomePage} />
       <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>} />
       <Redirect to="/home" />
       </Switch>      
      <Footer />
      </div>
  );
  }
}

export default Main;
