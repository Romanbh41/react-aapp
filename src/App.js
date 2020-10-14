import React, { Component } from 'react';
import './App.css';

import Roman from './Person/Person'

class App extends Component {
  state={
    persons: [
      {
       id:'ro', name:"Roshan" ,age:25},{
        id:'rom' ,name:"Roman" ,age:23},{
          id:'roma',name:"Rashmi",age:29}
      
    ],
    showPersons: false
  }
deletePersonHandler=(index)=>{
 // const persons=this.state.persons.slice();
 const persons=[...this.state.persons];
  persons.splice(index,1);
  this.setState({persons:persons});

}

  changeHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>
      {
        return p.id===id;
      })
      const person={...this.state.persons[personIndex]};

      person.name=event.target.value;
      const persons=[...this.state.persons];
      persons[personIndex]=person;
    this.setState({
      persons:persons
    })
    
  }

  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    
    this.setState({showPersons: !doesShow})};
    

  
  render() {
    const style={
      backgroundColor:"green",
      color:'white',
      font:"inherit",
      border:"1px solid black",
      padding:"10px"
    ,
    cursor:"pointer",
    
    
    };
     let persons=null;
     if (this.state.showPersons) 
     {
       persons= (<div>
       { this.state.persons.map((person,index)=>
        { return <Roman 
          click={()=> this.deletePersonHandler(index)}
           name={person.name} age={person.age}
           key={person.id}
           changed={(event)=>this.changeHandler(event,person.id)} 
        
           />
     })
}
     </div>)
        style.backgroundColor='red';
        
      }
          
        const classes=[];
        if(this.state.persons.length<=2){
          classes.push('red');
        }
        if(this.state.persons.length<=1) {
          classes.push('bold');
        }
        
        
     
    return (
    
      <div className="App">
       <h1>THIS IS REACT APP</h1>
       <p className={classes.join(' ')}>Developed by Roman Bhattarai</p>
       <button style={style}
        onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      
      </div>
     
    );

    
  }
}

export default App;
