import React from 'react';
import FETCH_LUNCH from '../type/fetch/lunch';
import axios from 'axios';

const Lunchpost = () => dispatch => {
    
    const url='http://localhost:4000/lunch';
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch({
    type: FETCH_LUNCH,
    payload: data
    })
    );
        
}



export default Lunchpost;

