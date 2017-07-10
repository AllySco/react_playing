import React from 'react'
import NewMoviesList from './NewMoviesList.jsx'

class NewMovieBox extends React.Component {

  constructor( props ) {
    super( props )
    this.state = {
      data: [{id: 1, title: "War For The Planet Of The Apes", year: "(2017)", director: "Matt Reeves", score: "6/12"}, {id: 2, title: "Wish Upon", year: "(2017)", director: "John Leonetti", score: "7/12"}, {id: 3, title: "The Big Sick", year: "(2017)", director: "Michael Showalter", score: "4/12"}, ]
    }
  }

  render() {
    return (
      <div className="new-movie-box">
      <NewMoviesList data={ this.state.data } />
      </div>
      )
  }

}


export default NewMovieBox