import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breakfastvalue from '../actions/breakfastpostform';
import Breakfastpost from '../actions/breakfastpost';
import Breakfastdel from '../actions/breakfastdel';
import $ from 'jquery';



class Breakfast extends React.Component{
    state={
        title: "",
        b: ""
    }
    componentDidMount(){
       this.props.Breakfastpost(); 
    }
    componentWillReceiveProps(n){
        this.props.posts.items.unshift(n.newpost)
    }
    
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
        
    }
    sub = (e) => {
        e.preventDefault();
        var j;
        var alpha=true;
        
        for (j=0; j <this.props.posts.items.length; j++) {
            var pehla = this.state.title.replace(/\s/g, '');
            var dusra= this.props.posts.items[j].title.replace(/\s/g, '');
            console.log(pehla);
            console.log(dusra);
            
            if(pehla === dusra){
                alpha=false;
            }
        }
        if (alpha) {
            this.props.Breakfastvalue(this.state)
            $('div #ka').text("Dish added successfully");
        } else {
            $('div #ka').text("This dish is already in the database");
        }
        
    }
    
    render(){
       
        const delo = (i) => {        
            this.props.Breakfastdel(i._id); 
            console.log(i._id);  
        }
        const a= this.props.posts.items.map(function(i){
            return(
                <div>
                    <div>
                    Dish Name: {i.title}
                    </div>
                    <div>
                    Dish Ingredients: {i.b}
                    </div>
                    
                    <button className='link' onClick={() =>delo(i)}> Delete</button>
                    <br /><br />
                </div>

            )
        })
        return(
            <div className='break'>
                <br /> <br />
                <div className='g'>
                    Add Breakfast Dishes :
                </div>
                <br /> <br />
                <form onSubmit={this.sub}>
                    
                    <label>Enter the name of dish: </label>
                    <input name='title' onChange={this.change} placeholder='Dish Name'/>
                    <br /><br />
                    <label>Enter the ingredients of dish: </label>
                    <input name='b' onChange={this.change} placeholder='Dish Ingredients'/>
                    <button type='submit' className='link' >Add Dish</button>
                    <div id='ka'>

                    </div>
                </form>
                <br /> <br />
                <div className='g'>
                    Breakfast Dishes that you added :
                    
                </div>
                <div>
                    <br /><br />
                    {a}
                    
                </div>
            </div>
        )
    }
}

const mapstatetoprops =(state) => {
    return{
        posts: state.breakfast,
        newpost: state.breakfast.item
        
    }

}
export default connect(mapstatetoprops, {Breakfastpost, Breakfastvalue, Breakfastdel})(Breakfast) ;