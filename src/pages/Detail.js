import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'
import './Detail.css'

const API_KEY = 'f5bc629a'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fetchMovie ({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({ movie })
                this.setState({ movie })
            })
    }

    componentDidMount() {
        console.log(this.props)
        const { movieId } = this.props.match.params
        this._fetchMovie({ id: movieId })
    }

    render() {
        const {
            imdbID,
            Title, 
            Poster, 
            Actors, 
            Released, 
            Country, 
            Type, 
            imdbRating, 
            Year,
            Genre
        } = this.state.movie
        return (
            <div className="Detail">
            <div className="Detail__card">
            <div className="Detail__column Detail__column_img">
                <img src={Poster} alt={Title} className="Detail__poster Detail__poster_blured"/>
                <img src={Poster} alt={Title} className="Detail__poster"/>
            </div>
            <div className="Detail__column Detail__description">
                <h2 className="Detail__title title">{Title}</h2>
                <div className="tags">
                <p className="tag is-rounded">{Released}</p>
                <p className="tag is-rounded">{Country}</p>
                <p className="tag is-rounded">{Type}</p>
                </div>
                <p>
                <strong>IMDB Rating:</strong> <span className="tag is-warning"><i className="fas fa-star Detail__star"></i> {imdbRating}</span>
                </p>
                <p>
                <strong>Id:</strong>
                <br/>
                {imdbID}
                </p>
                <p>
                <strong>Actors:</strong>
                <br/>
                {Actors}
                </p>
                <p>
                <strong>Year:</strong>
                <br/>
                {Year}
                </p>
                <p>
                <strong>Gender:</strong>
                <br/>
                {Genre}
                </p>
                <div className="Detail__footer">
                    <Link 
                        className="Detail__btn" 
                        to='/' 
                    >
                        volver a la portada
                    </Link>
                </div>
            </div>
            </div>
        </div>
        )
    }
}
