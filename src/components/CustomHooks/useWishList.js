import { useEffect, useReducer } from "react";
import MoviesReducer from "../WishList/MoviesReducer.js";

function useWishList() {
  
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem('wishFilms')) || initialState;
  }

  const [wishFilms, dispatch] = useReducer(
    MoviesReducer,
    initialState,
    init
  );

  useEffect(() => {
    localStorage.setItem("wishFilms", JSON.stringify(wishFilms));
  }, [wishFilms]);

  const wishAdd = (wishFilm) => {
    console.log(wishFilm);
    console.log(typeof wishFilms);
    const filmExist = wishFilms.find(
      (filmWish) => filmWish.id === wishFilm.id
    );
    if (filmExist) {
      const action = {
        type: "film exist",
      };
      dispatch(action);
    } else {
      const action = {
        type: "add film",
        payload: wishFilm,
      };
      dispatch(action);
    }
  };

  const wishRemove = (id) => {
    dispatch({
      type: "delete film",
      payload: id,
    });
  };

  return {wishFilms, wishAdd, wishRemove};
}

export default useWishList;
