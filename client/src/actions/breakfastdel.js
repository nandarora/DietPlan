import React from 'react';
import DEL_DATA from '../type/del';


const Breakfastdel = (a) => dispatch => {
    
    const url='http://localhost:4000/breakfast/' + a;
    console.log(url);
    
    fetch(url,{
        method: 'DELETE',
        headers : {
            'content-type':'application/json' 
        },
        
    })
    .then(res => res.json())
    .then(data => dispatch({
        type: DEL_DATA,
        payload: a
    }));
    
        


}
export default Breakfastdel;