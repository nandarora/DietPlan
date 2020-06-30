import { combineReducers } from 'redux';
import Breakfastreducer from './breakfastreducer';
import Lunchreducer from './lunchreducer';
import Dinnerreducer from './dinnerreducer';

export default combineReducers({
    breakfast: Breakfastreducer,
    lunch: Lunchreducer,
    dinner: Dinnerreducer
})
