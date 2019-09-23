import * as actionTypes from './actions';

export function fetchData(event) {
    return dispatch => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${event}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(addData(data));
        });
      };
};

export function addData(data) {
    return {
        type: actionTypes.ADD_DATA,
        canvasData: data
    };
};