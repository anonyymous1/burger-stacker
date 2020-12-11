import Ingredients from './components/Ingredients'
import BurgerStack  from './components/BurgerStack'
import './App.css';
import React, {Component} from 'react'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Pickle', color: 'darkgreen'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      burgerStack: []
    }
  }

  addToBurger = (eachIngredient) => {
    let burgerArray = this.state.burgerStack
    this.state.burgerStack.push(eachIngredient)
    this.setState({burgerStack: burgerArray})
  }

  removeFromBurger = (e) => {
    this.setState({
      burgerStack:[]
    })
  }

  render(){
     return (
    <div className="row">
      <div className="column">
        <Ingredients ingredients={this.state.ingredients} addToBurger={this.addToBurger}/>
      </div>
      <div className="column">
        <BurgerStack burger={this.state.burgerStack} removeFromBurger={this.removeFromBurger}/>
      </div>
    </div>
  );
}
  }
 
