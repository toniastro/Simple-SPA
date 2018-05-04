import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';
import AddMovie from './AddMovie';

class Main extends Component {
 
  constructor() {
   
    super();
    this.state = {
        movies: [],
        currentMovie: null
    }
     this.handleAddMovie = this.handleAddMovie.bind(this);
  }
  componentDidMount() {
    fetch('/api/movies')
        .then(response => {
            return response.json();
        })
        .then(movies => {
            this.setState({ movies });
        });
  }
 
 renderMovies() {
    return this.state.movies.map(movie => {
        return (
            <li onClick={
                () =>this.handleClick(movie)} key={movie.id} >
                { movie.title } 
            </li>    
        );
    })
  }

   handleClick(movie) {
   	//handleClick is used to set the state
    this.setState({currentMovie:movie});
   
  }

  handleAddMovie(movie) {
     
   movie.year = Number(movie.year);
   fetch( 'api/movies/', {
       method:'post',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
        
       body: JSON.stringify(movie)
   })
   .then(response => {
       return response.json();
   })
   .then( data => {
       this.setState((prevState)=> ({
           movies: prevState.movies.concat(data),
           currentMovie : data
       }))
   })
 
 }   
  render() {
    const mainDivStyle =  {
    display: "flex",
    flexDirection: "row"
  }
    
	const divStyle = {
	   
	    justifyContent: "flex-start",
	    padding: '10px',
	    width: '35%',
	    background: '#f0f0f0',
	    padding: '20px 20px 20px 20px',
	    margin: '30px 10px 10px 30px'
	    
	}
    return (
        <div style={mainDivStyle}>
            <div style={divStyle}>
            <h4> Movies in our Database</h4>
              <ul>
                { this.renderMovies() }
              </ul> 
            </div> 

          <Movie movie={this.state.currentMovie} />

          <AddMovie onAdd={this.handleAddMovie} />
        </div>
    );
  }
}

export default Main; 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
} 