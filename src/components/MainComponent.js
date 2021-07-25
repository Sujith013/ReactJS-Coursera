import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent.js';
import { DISHES } from '../shared/dishes.js';
import DishDetailComponent from './DishDetailComponent.js';

class Main extends Component{
  

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      selectedDish:null
    }
  }

  onDishselect(dishID){
    this.setState({
    selectedDish:dishID
    });
}

  dispdish(dishID)
  {
      if(dishID!=null)
      return(
        <DishDetailComponent SelectedDish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} />
      );
      else
      return(
          <div></div>
      );
  }

  render() {
  return (
   
    <div>
    <Header />
      <Menu dishes={this.state.dishes} onClick={(dishID)=>this.onDishselect(dishID)} />
      <div className="container">
      {this.dispdish(this.state.selectedDish)}
      <Footer />
      </div>
    </div>
  );
  }
}

export default Main;
