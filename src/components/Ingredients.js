import React, {Component} from 'react';
export default class Ingredient extends Component {
    render() {
        const ingredientItem = this.props.ingredients.map((eachItem, ind) => {
            return(
                <div>
                <li style={{ backgroundColor: eachItem.color }} key={ind}>{eachItem.name}<button onClick={() => this.props.addToBurger(eachItem)}>Add to Burger</button></li>
                </div>
            )  
        })
        return(
        <div>
            <h2>Ingredients</h2>
            <hr/>
            {ingredientItem}
        </div>
    )
    }
}