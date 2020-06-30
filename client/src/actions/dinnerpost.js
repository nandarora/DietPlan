import React from 'react';
import FETCH_DINNER from '../type/fetch/dinner';
import axios from 'axios';

const Dinnerpost = () => dispatch => {
    
    const url='http://localhost:4000/dinner';
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch({
    type: FETCH_DINNER,
    payload: data
    })
    );
        
}



export default Dinnerpost;

