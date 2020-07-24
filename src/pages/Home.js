import React, { Component } from 'react'

//import { Title } from '../components/Title'
import  { SearchForm }  from '../components/SearchForm'
import  { MovieList } from '../components/MovieList'

import './Home.css'

export class Home extends Component {
    state = { usedSearch: false, results: [] }

    _handleResults = results => {
        this.setState({ results,  usedSearch: true})
    }

    __renderResults() {
        return this.state.results.length === 0
        ? <p>lo sentimos no se encontro la busqueda</p>
        : <MovieList movies={this.state.results}/>
    }

    render() {
        return (
            <section className="Home">
                <div className="Home__container">
                    <div className="Home__form">
                        {/* <Title>Entertainment Searcher</Title> */}
                        <SearchForm onResults={this._handleResults}/>
                    </div>
                    <div className="Home__description">
                        {this.state.usedSearch
                            ? this.__renderResults()
                            : <h6> Tu puedes buscar peliculas juegos o series aqui </h6>
                        }
                    </div>
                    <div className="Home__credits">
                        <p>Yo use <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDB API</a> para resultados</p>
                        <p><i>
                        link a mi github: <a href="https://github.com/DennisMartel" target="__blank">Github</a>
                        </i></p>
                    </div>
                </div>
            </section>
        )
    }
}
