import React, {Component} from 'react'
export default class BurgerStack extends Component{
    render() {
        const burgerChoice = this.props.burger.map((eachItem, ind) => {
            return <div>
                    <li style={{ backgroundColor: eachItem.color }} key={ind}>{eachItem.name}</li>
                    </div>
        })
        return(
        <div>
            <h2>Burger</h2>
            <hr/>
            {burgerChoice}
            <button onClick={()=>this.props.removeFromBurger()}>Clear Burger</button>
        </div>
        )
    }
}
    

