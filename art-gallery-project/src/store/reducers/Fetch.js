import * as actions from '../actions';

const initialState = {
  canvasData: []
};

const responseData = null;

const searchCanvas = () => {
   fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Chinese')
   .then((res) => res.json())
   .then((canvasData) => {
   });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   case actions.FETCH:
       return state;
   default:
       return state;
  };
};

export default reducer;