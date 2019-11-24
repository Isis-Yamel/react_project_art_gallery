import * as actions from '../actions/types';

const initialState = {
  favorites: []
};

const getFavorite = (id) => {
    const canvasFavorite = state.favorites.filter(canvas => {
        return canvas.id === id;
    });

    return canvasFavorite;
};

const addFavorite = state => {
    return {
        ...state.favorites,
        getFavorite()
    };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   case actions.ADD_FAVORITE:
       return addFavorite(state);
   default:
       return state;
  };
};

export default reducer;