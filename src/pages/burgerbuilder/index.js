import React, { Component } from "react";
import Burger from "../../components/burger";
import BuildControls from "../../components/buildControls";
const INGREDIENTS_PRICE = {
  salad: 150,
  cheese: 250,
  bacon: 800,
  meat: 1500,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 0,
  };

  ortsNemeh = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    this.setState({ totalPrice: newPrice, ingredients: newIngredients });
  };

  ortsHasah = (type) => {
    const newIngredients = { ...this.state.ingredients };
    if (newIngredients[type] > 0) {
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
      this.setState({ totalPrice: newPrice, ingredients: newIngredients });
    }
  };
  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Burger orts={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
