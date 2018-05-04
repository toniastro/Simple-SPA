import React, { Component } from 'react';

class AddMovie extends Component {
 
  constructor(props) {
    super(props);
       /* Initialize the state. */
       this.state = {
          newMovie: {
              title: '',
              picture: '',
              description: '',
              year: 0,
              rating: ''
          }
        }
     
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
   
  /* This method dynamically accepts inputs and stores it in the state */
  handleInput(key, e) {
     
    var state = Object.assign({}, this.state.newMovie); 
    state[key] = e.target.value;
    this.setState({newMovie: state });
  }

  handleSubmit(e) {
    //preventDefault prevents page reload   
    e.preventDefault();
   
    this.props.onAdd(this.state.newMovie);
  }
 
  render() {
    const headStyle = {
      position: 'absolute',
      left: '35%',
      top: '80%',
      flexDirection: 'space-between',
      
      marginLeft: '30px'}

    const tailStyle = {
      margin: '0px 10px 0px 10px'
    }
     
    return(
      <div> 
       
        <div style={headStyle}> 
        <form onSubmit={this.handleSubmit}>
         <h2> Upload new Movie </h2>
          <label> Title: 
           { /*On every keystroke, the handeInput method is called */ }
            <input type="text" style={tailStyle} onChange={(e)=>this.handleInput('title',e)} />
          </label>
           <label> Image Url: 
            <input type="text" style={tailStyle} onChange={(e)=>this.handleInput('picture',e)} />
          </label>
           
          <label> Description: 
            <input type="text" style={tailStyle} onChange={(e)=>this.handleInput('description',e)} />
          </label>

          <label> Year: 
            <input type="text" style={tailStyle} onChange={(e)=>this.handleInput('year',e)} />
          </label>

           <label> Rating: 
            <input type="text" style={tailStyle} onChange={(e)=>this.handleInput('rating',e)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>)
  }
}
 
export default AddMovie;