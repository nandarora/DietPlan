import React from 'react';
import ADD_DATA from '../type/add';

const Lunchvalue = (b) => dispatch => {
    
    
    fetch('http://localhost:4000/lunch',{
            method: 'POST',
            headers : {
                'content-type':'application/json' 
            },
            body: JSON.stringify(b)
        }).then(res => res.json())
        .then(data => dispatch({
        type: ADD_DATA,
        payload: data
        })
        ); 
}

export default Lunchvalue;