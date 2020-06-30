import React from 'react';
import FETCH_BREAK from '../type/fetch/break';
import axios from 'axios';

const Breakfastpost = () => dispatch => {
    
    const url='http://localhost:4000/breakfast';
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch({
    type: FETCH_BREAK,
    payload: data
    })
    );
        
}



export default Breakfastpost;

