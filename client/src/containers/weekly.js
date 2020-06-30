import React, { Component } from 'react';
import Mon from './mon';
import Tue from './tue';
import Wed from './wed';
import Thu from './thu';
import Fri from './fri';
import Sat from './sat';
import Sun from './sun';



class Weekly extends React.Component{
    
    
    render(){
        
        return (
            <div>
                <div> Full Week Meal plan </div>
                <br /><br />
                <Mon /> <br /><br />
                <Tue /> <br /><br />
                <Wed /> <br /><br />
                <Thu /> <br /><br />
                <Fri /> <br /><br />
                <Sat /> <br /><br />
                <Sun /> <br /><br />
            </div>
            
            
            
        )
        
        
    }
}


export default Weekly;