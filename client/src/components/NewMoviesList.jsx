import React from 'react'
import NewMovie from './NewMovie.jsx'

class NewMoviesList extends React.Component {

  render() {

    const movieNodes = this.props.data.map( ( movie ) => {
      return <NewMovie key={movie.id} title={"Title: " + movie.title }>{"Year: " + 
        movie.year }, { "Director: " + movie.director }, {"Score: " + movie.score }</NewMovie>
      })

    return(
      <div className="new-movies-list-div">
      {movieNodes}
      </div>
      )
  }


}


export default NewMoviesList