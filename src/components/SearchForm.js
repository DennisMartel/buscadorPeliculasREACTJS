import React, { Component } from 'react'
import './SearchForm.css'

const API_KEY = 'f5bc629a'

export class SearchForm extends Component { 
    state = {
        inputMovie: ''
    }

    _handleSubmit = e => {
        e.preventDefault()
        //alert(this.state.inputMovie)
        const { inputMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                console.log(results)
                const { Search = [], totalResults = '0' } = results
                console.log(Search, totalResults)
                this.props.onResults(Search)
                window.sessionStorage.setItem('sessionMovies', JSON.stringify(Search))
            })
    }

    _handleChange = e => {
        this.setState({ inputMovie: e.target.value})
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this._handleSubmit}>
                    <div className="SearchForm__inputContainer">
                        <input 
                            className="SearchForm__input" 
                            onChange={this._handleChange}
                            type="text"
                            placeholder="ejemplo: dragon ball"
                        />
                        <button className="SearchForm__submit">buscar</button>
                    </div>
                </form>
            </div>
        )
    }
}