import React from 'react';
import FETCH_BREAK from '../type/fetch/break';
import ADD_DATA from '../type/add';
import DEL_DATA from '../type/del';

const initialstate={
    items: [{_id:56,title:56,b:66},{_id:56,title:56,b:66},{_id:56,title:56,b:66},{_id:56,title:56,b:66},{_id:56,title:56,b:66},{_id:56,title:56,b:66},{_id:56,title:56,b:66}],
    item: 5,
    
}

const Breakfastreducer = (state= initialstate, action) => {
    console.log('Entered Breakfast reducer..');
    console.log(action.type);

    switch (action.type) {
        case FETCH_BREAK:
            return{
                ...state,
                items: action.payload

            }

        case ADD_DATA:
            return{
                ...state,
                item: action.payload
            } 
        case DEL_DATA:
            return{
                ...state,
                items: state.items.filter(m => m._id !== action.payload)
            }
        

        default:
            return state;
    }

}

export default Breakfastreducer;