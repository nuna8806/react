import react from "react";
import css from "./style.module.css";
import Toolbar from "../../components/toolbar";
import BurgerBuilder from "../burgerbuilder";
function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.Content}>
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
