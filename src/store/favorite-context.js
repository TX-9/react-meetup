import { createContext, useState } from "react";

// consuming Component imports this
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    //the below is only for IDE autocompletion
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

// Top level, index.js, imports this
export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    function addFavoriteHandler(meetup) {
        setUserFavorites(prev => prev.concat(meetup));
    }
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(userFavorites.filter(meetup => meetup.id !== meetupId));
    }
    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;