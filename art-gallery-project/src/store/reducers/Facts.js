import * as actions from '../actions';
import * as factData from '../data/storeData';

const initialState = {
  funData: []
};

const randomFact = (state) => {
  const randomNumber = Math.round(Math.random(state.funData.length));

  return {
    ...state.funData,
    funData: factData.facts[randomNumber]
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   case actions.FUN_FACT:
       return randomFact(state);
   default:
       return state;
  };
};

export default reducer;