import React, { Component } from 'react';
import { Title } from './components/Title'
import  { SearchForm }  from './components/SearchForm'
import  { MovieList } from './components/MovieList'
import { Detail } from './pages/Detail'

import './App.css';
import '../node_modules/mdbootstrap/css/bootstrap.min.css'

class App extends Component {
  state = { usedSearch: false, results: [] }

  _handleResults = results => {
    this.setState({ results,  usedSearch: true})
  }

  __renderResults() {
    return this.state.results.length === 0
      ? <p>lo sentimos no se encontro la busqueda</p>
      : <MovieList movies={this.state.results}/>
  }

  render(){
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if(hasId) {
      return <Detail id={url.searchParams.get('id')}/>
    }
    return (
      <div className="App">
        <Title>Buscador de peliculas en react</Title>
        <SearchForm onResults={this._handleResults} />
        {this.state.usedSearch
          ? this.__renderResults()
          :<small>usa el formulario para buscar una pelicula</small>
        }
      </div>
    );
  }
}

export default App;
