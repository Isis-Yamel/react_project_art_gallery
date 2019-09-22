import * as actions from '../actions';

const initialState = {
  canvasData: []
};

const searchCanvas = state => {
   fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/1997')
   .then((res) => res.json())
   .then((data) => {
     console.log(data);
     return {
       ...state.canvasData,
      canvasData: data
     }
   });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   case actions.FETCH:
       return searchCanvas(state);
   default:
       return state;
  };
};

export default reducer;