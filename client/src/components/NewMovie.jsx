import React from 'react'

class NewMovie extends React.Component {

  render() {
    return (
      <div className="new-movie">
      <h3 className="new-movie-title">
      { this.props.title }
      </h3>
      <h4 className="movie-details">
      { this.props.children }
      </h4>
      </div>
      )
  }

}


export default NewMovie