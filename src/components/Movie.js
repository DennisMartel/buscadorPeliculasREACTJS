import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <a href={`?id=${id}`}>
                        <div className="card">
                        <img 
                            alt={title}
                            src={poster} 
                            className="card-img-top" 
                        />
                        <div class="card-body">
                            <h5 className="card-title">{year}</h5>
                            <p className="card-text">{title}</p>
                        </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


