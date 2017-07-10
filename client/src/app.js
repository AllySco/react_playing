import React from 'react';
import ReactDOM from 'react-dom';
import NewMovieBox from './components/NewMovieBox.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <NewMovieBox />,
    document.getElementById('app')
    );
});
