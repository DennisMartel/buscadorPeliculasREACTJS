import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../pages/Home.css'

export class Movie extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }
    render() {
        const { id, poster, title, year} = this.props
        return (
            <Link to={`/detail/${id}`} className="Home__movie">
                <img src={poster} alt={title} className="Home__movieImg" />
                <img src={poster} alt={title} className="Home__movieImg Home__movieImg_blured" />
                <div className="Home__movieContent">
                <h3 className="Home__movieContent-title">{title}</h3>
                <p className="Home__movieContent-year">{year}</p>
                </div>
            </Link>
        )
    }
}


