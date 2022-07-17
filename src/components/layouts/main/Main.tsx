import React from "react";
import classes from "./Main.module.css"
import ItemsList from "../../items/itemsList/ItemsList";
import Card from "../../ui/card/Card";

interface IMainProps {

}

const Main : React.FC<IMainProps> = (props) => {
  return (
    <main className={classes.main}>
      <Card>
        <ItemsList></ItemsList>
      </Card>

    </main>
  );

}

export default Main;