import React, { useContext } from "react";
import Card from "../UI/Card";
import classes from "./MeetUpItems.module.css";
import FavoritesContext from "../store/favorites-context";

function MeetupItems(props) {
  const { image, title, address, description, id } = props;
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  const toggleFavorties = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        id,
        title,
        description,
        image,
        address,
      });
    }
  };

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorties}>
            {itemIsFavorite ? "Remove From Favorites" : "Add to Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItems;
