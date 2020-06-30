import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lunchpost from '../actions/lunchpost';
import Breakfastpost from '../actions/breakfastpost';
import Dinnerpost from '../actions/dinnerpost';
import $ from 'jquery';



class Sun extends React.Component{
    
    
    componentDidMount(){
        this.props.Breakfastpost();
         
        this.props.Dinnerpost(); 
        this.props.Lunchpost(); 
     }
    
    render(){
        var days=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
        var day=0;
        var bn=-1;
        var ln=-1;
        var dn=-1;
        var gamma= <div></div>
        console.log(this.props);
        for(day=0; day< 7; day++){
            var j=-1;
            bn++;
            ln++;
            dn++;
            if (bn< this.props.break.items.length) {
                
            } else {
                bn=0;
            }
            if (ln< this.props.lunch.items.length) {
                
            } else {
                ln=0;
            }
            if (dn< this.props.dinner.items.length) {
                
            } else {
                dn=0;
            }
            
        gamma = 
            <div className='break'>
              {days[day]} 
              <div> Breakfast: {this.props.break.items[bn].title}</div>
              <div> Lunch: {this.props.lunch.items[ln].title}</div>
              <div> Dinner: {this.props.dinner.items[dn].title}</div>
  
            </div>
        
        }
        return (
            gamma
            
            
        )
        
        
    }
}

const mapstatetoprops =(state) => {
    return{
        break: state.breakfast,
        lunch: state.lunch,
        dinner: state.dinner
        
    }
}
export default connect(mapstatetoprops, {Breakfastpost, Lunchpost, Dinnerpost})(Sun) ;