import React, { Component } from 'react';  
class App extends React.Component {  
  constructor(props) {  
      super(props);  
      this.updateSubmit = this.updateSubmit.bind(this);  
      this.input = React.createRef();  
  }  
  updateSubmit(event) {  
      alert('You have entered the UserName and CompanyName successfully.');  
      event.preventDefault();  
  }  
  render() {  
    return ( 
      <center>      
        <form onSubmit={this.updateSubmit}>  
        <h3>Enter the Following details:</h3>  
        <h4>(Uncontrolled Form Example)</h4>
        <label>Name:  <br></br><br></br>
            <input type="text" ref={this.input} />  
        </label>  
        <br></br>
        <br></br>

        <label>  
            CompanyName:  <br></br><br></br>
            <input type="text" ref={this.input} />  
        </label>  
        <br></br>
        <br></br>
        
        <input type="submit" value="Submit" />  
      </form>  
      </center>

    );  
  }  
}  
export default App; 
