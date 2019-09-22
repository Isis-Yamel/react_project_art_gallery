import * as actions from '../actions';

const initialState = {
    canvasData: []
}

const searchCanvas = () => {
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/1321')
    .then((res) => res.json())
    .then((data) => {
        initialState.canvasData = data;
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH:
            const fetch = [...state.canvasData]
            return {
                ...state,
                canvasData: searchCanvas
            }
    }
    return state;
};

export default reducer;