import * as actions from '../actions';
import * as factData from '../data/factData';

const initialState = {
  funData: []
};

const randomIntFromInterval = (min, max) =>{
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomFact = (state) => {
  return {
    ...state.funData,
    funData: factData.facts[randomIntFromInterval(0, 9)]
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