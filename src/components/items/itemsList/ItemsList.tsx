import React, {useEffect} from "react";
import classes from "./ItemsList.module.css";

import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { fetchItemsAsync, items } from "../../../store/itemsSlice";
import ItemDetails from "../itemDetails/ItemDetails";

interface IItemsListProps {

}

const ItemsList : React.FC<IItemsListProps> = (props) => {

  const itemsData = useAppSelector(items);
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(fetchItemsAsync())
  },[]);

  console.log(itemsData)
  return (
    <main className={classes.itemDetails}>
      <ul>
        <ItemDetails></ItemDetails>
      </ul>
    </main>
  );

}

export default ItemsList;