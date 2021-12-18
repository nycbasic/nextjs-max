import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (id) => {},
  itemIsFavorite: (id) => {},
});

export default FavoritesContext;

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemsFavoritesHandler,
  };

  function addFavoritesHandler(favoriteMeetup) {
    setUserFavorites((prev) => {
      return [...prev, favoriteMeetup];
    });
  }
  function removeFavoritesHandler(id) {
    setUserFavorites((prev) => {
      return prev.filter((meetup) => id !== meetup.id);
    });
  }
  function itemsFavoritesHandler(id) {
    return userFavorites.some((meetup) => meetup.id === id);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
