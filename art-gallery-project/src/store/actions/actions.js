import * as actionTypes from './types';

export function fetchData(event) {
    return dispatch => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${event}`)
        .then((res) => res.json())
        .then((res) => {
            let CanvasData = [];

            res.objectIDs.map((element, index) => {
               if (index <= 11) {
                   fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
                   .then((res) => res.json())
                   .then((data) => {
                       CanvasData.push(data);
                   })
               }
           });

           setTimeout(() => {
            dispatch(addData(CanvasData));
           }, 2000);
        });
      };
};

export function addData(data) {
    return {
        type: actionTypes.ADD_DATA,
        canvasData: data
    };
};
