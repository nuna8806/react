import Readt from "react";
import Burgeringredient from "../burgeringredient";
import css from "./style.module.css";

const Burger = (props) => {
  const items = Object.entries(props.orts);
  let content = [];

  items.map((el, index) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<Burgeringredient key={`${index}${i}`} type={el[0]} />);
  });

  if (content.length === 0)
    content = <p>Хачиртай талхныхаа орцыг сонгоно уу ...</p>;

  return (
    <div className={css.Burger}>
      <Burgeringredient type="bread-top" />
      {content}
      <Burgeringredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
