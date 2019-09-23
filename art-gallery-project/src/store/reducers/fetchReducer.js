import * as actionType from './actions/actions';

const initialState = {
  canvasData: []
};

const reducer = (state = initialState, action) => {
  console.log(action.canvasData);
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