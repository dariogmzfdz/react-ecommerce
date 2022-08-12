function MoviesReducer(initialState = [], action) {
  switch (action.type) {

    case "add film":
      return [...initialState, action.payload];
    case "film exist":
        return [...initialState];
    case "delete film":
      return initialState.filter((film) => film.id !== action.payload);
    default:
      return initialState;

  }
}

export default MoviesReducer;
