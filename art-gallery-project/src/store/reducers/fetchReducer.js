import * as actionType from '../actions/types';

const initialState = {
  canvasData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   case actionType.ADD_DATA:
       return {
         ...state.canvasData,
         canvasData: action.canvasData
       };
   default:
       return state;
  };
};

export default reducer;