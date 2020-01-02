import * as actions from '../actions/types';

const initialState = {
  favorites: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   case actions.ADD_FAVORITE:
       console.log(action.favorite);
       console.log(state);

       return {
           ...state.favorites,
           favorites: [...state.favorites, action.favorites]
       }
   default:
       return state;
  };
};

export default reducer;