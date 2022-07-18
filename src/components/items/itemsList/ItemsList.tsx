import React, {useEffect} from "react";
import classes from "./ItemsList.module.css";

import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { fetchItemsAsync, items } from "../../../store/items/itemsSlice";
import ItemDetails from "../itemDetails/ItemDetails";

interface IItemsListProps {

}

const ItemsList : React.FC<IItemsListProps> = (props) => {

  const itemsData = useAppSelector(items).data;
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(fetchItemsAsync())
  },[]);

  return (
    <main>
      <section>
          <ul className={classes.itemsList}>
            {itemsData.map(item => <ItemDetails {...item} key={item.id}></ItemDetails>)}
          </ul>
      </section>
      <ul>
      </ul>
    </main>
  );

}

export default ItemsList;