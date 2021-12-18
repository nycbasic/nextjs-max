import React, { useContext } from "react";
import FavoritesContext from "../components/store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const FavoriteCtx = useContext(FavoritesContext);

  let content;

  if (FavoriteCtx.totalFavorites === 0) {
    content = <p>You have not added any favorites</p>;
  } else {
    content = <MeetupList meetups={FavoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
}

export default Favorites;
