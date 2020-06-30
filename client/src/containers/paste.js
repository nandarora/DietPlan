import React from 'react';
import { connect } from 'react-redux';
import Breakfastpost from '../actions/breakfastpost';
import Lunchpost from '../actions/lunchpost';
import Dinnerpost from '../actions/dinnerpost';

class Weeklymenu extends React.Component{
    
    render(){
        var days= ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        var i=0;
        var j=0;
        
        return(
            <div>
                <div>
                    Day : {days[j]}
                    {j += 1}
                    {console.log(j)
                    
                    }
                    <div>
                        Breakfast: 
                    </div>

                </div>
            </div>
        )
    }
}
const mapstatetoprops = (state) =>{
    return{
        breakfast: state.breakfast.items,
        lunch: state.lunch.items,
        dinner: state.dinner.items
    }


}

export default connect(mapstatetoprops, { Breakfastpost, Lunchpost, Dinnerpost})(Weeklymenu);