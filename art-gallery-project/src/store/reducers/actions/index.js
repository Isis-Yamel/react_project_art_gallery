import * as actionTypes from './actions';

export function fetchData(event) {
    return dispatch => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${event}`)
        .then((res) => res.json())
        .then((res) => {
            let CanvasData = [];

            res.objectIDs.map((element, index) => {
               if (index <= 9) {
                   fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
                   .then((res) => res.json())
                   .then((data) => {
                       CanvasData.push(data);
                   })
               }
           });

           dispatch(addData(CanvasData));
        });
      };
};

export function addData(data) {
    return {
        type: actionTypes.ADD_DATA,
        canvasData: data
    };
};
