import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lunchvalue from '../actions/lunchpostform';
import Lunchpost from '../actions/lunchpost';
import Lunchdel from '../actions/lunchdel';
import $ from 'jquery';


class Lunch extends React.Component{
    state={
        title: '',
        b: ''
    }
    componentDidMount(){
       this.props.Lunchpost(); 
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
            this.props.Lunchvalue(this.state)
            $('div #ka').text("Dish added successfully");
        } else {
            $('div #ka').text("This dish is already in the database");
        }
        
    }
    render(){
        const delo = (i) => {        
            this.props.Lunchdel(i._id); 
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
                    Add Lunch Dishes :
                </div>
                <br /> <br />
                <form onSubmit={this.sub}>
                    
                    <label>Enter the name of dish: </label>
                    <input name='title' onChange={this.change} placeholder='Dish Name'/>
                    <br /><br />
                    <label>Enter the ingredients of dish: </label>
                    <input name='b' onChange={this.change} placeholder='Dish Ingredients'/>
                    <button className='link' type='submit' >Add Dish</button>
                    <div id='ka'>

                    </div>
                </form>
                <br /> <br />
                <div className='g'>
                    Lunch Dishes that you added :
                    
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
        posts: state.lunch,
        newpost: state.lunch.item
        
    }

}
export default connect(mapstatetoprops, {Lunchpost, Lunchvalue, Lunchdel})(Lunch) ;