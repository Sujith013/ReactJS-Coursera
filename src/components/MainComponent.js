/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import Home from './HomeComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent.js';
import Contact from './ContactComponent.js';
import Aboutus from './AboutComponent.js';
import DishDetailComponent from './DishDetailComponent.js';
import {Switch, Route, Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  };
}


class Main extends Component{
  

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);


  }

  render() {
  
   const HomePage=()=>{

     return(

      <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]} 
      promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}  
      leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
      />

     );
   }

   const DishWithId=({match})=>{

    return(
      <DishDetailComponent dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
      comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))} />
    );
   }

 
   const About=()=>{
     return(
       <Aboutus leaders={this.props.leaders} />
     );
   }

    return (
   
    <div>
    <Header />
       <Switch>
       <Route path="/home" component={HomePage} />
       <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>} />
       <Route path="/menu/:dishId" component={DishWithId} />
       <Route exact path="/Contactus" component={Contact} />
       <Route exact path="/aboutus" component={About} />
       <Redirect to="/home" />
       </Switch>      
      <Footer />
      </div>
  );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
