import React from "react";
import BuildControl from "../buildControl";
import css from "./style.module.css";

const BuildControls = (props) => (
  <div className={css.BuildControls}>
    <p>Бургерийн үнэ: {props.totalPrice}₮</p>
    <BuildControl
      disabled={props.disabledIngredients}
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
      type="salad"
      orts="Салад"
    />
    <BuildControl
      disabled={props.disabledIngredients}
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
      type="cheese"
      orts="Бяслаг"
    />
    <BuildControl
      disabled={props.disabledIngredients}
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
      type="bacon"
      orts="Гахайн мах"
    />
    <BuildControl
      disabled={props.disabledIngredients}
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
      type="meat"
      orts="Үхрийн мах"
    />
  </div>
);

export default BuildControls;
