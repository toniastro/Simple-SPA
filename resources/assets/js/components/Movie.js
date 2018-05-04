import React, { Component } from 'react';
 

const Movie = ({movie}) => {
    
   
  const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '65%',
      margin: '30px 10px 10px 30px'
  }

  if(!movie) {
    return(<div style={divStyle}>  Movie doesnt exist </div>);
  }
     
  //Else, display the Movie data
  return(  
    <div style={divStyle}> 
      <h2>Movie Name: {movie.title} </h2>
      <p>Description: {movie.description} </p>
      <p>
      <img src={movie.picture} width={140} height={150}/>
      </p>
      <h3> Year : {movie.year} </h3>
      <h3> Rating : {movie.rating} </h3>  
    </div>
  )
}
 
export default Movie ;