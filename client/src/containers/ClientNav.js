import React from 'react';
class Clientnav extends React.Component{
    
    state={
        isOpen: false
    }
    
    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
        console.log(this.state.isOpen);
        
    }
    render(){
        const a = () =>{
        if (this.state.isOpen === true) {
            return(
                <div>
                    <div>
                    <a href='/mon'>
                       Monday
                    </a>
                    </div>
                    <div>
                    <a href='/tue'>
                       Tuesday  
                    </a>
                    </div>

                    <div>
                    <a href='/wed'>
                       Wednesday  
                    </a>
                    </div>

                    <div>
                    <a href='/thu'>
                       Thursday  
                    </a>
                    </div>
                    
                    <div>
                    <a href='/fri'>
                       Friday  
                    </a>
                    </div>

                    <div>
                    <a href='/sat'>
                       Saturday  
                    </a>
                    </div>
                    <div>
                    <a href='/sun'>
                       Sunday  
                    </a>
                    </div>

                    <a href='/weekly'>
                       Weekly
                    </a>
                    
                </div>
            )}
        }
        return(
            <div id='navigation'>
                Plan your Weekly Diet
                <div id='links'> 
                    <a className='link' href='/breakfast'>Add Breakfast Meals</a>
                    <a className='link' href='/lunch'>Add Lunch Meals</a>
                    <a className='link' href='/dinner'>Add Dinner Meals</a>
                    <div id='toggle'>
                    <button className='link'  onClick={this.toggle}> Toggle</button>
                </div>
            </div>
                
                
                
                <div>{a()}</div>
                
            </div>
 
            
        )
    }
}

export default Clientnav;
