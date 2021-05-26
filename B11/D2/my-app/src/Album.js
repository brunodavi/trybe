// /src/Album.js
import React from 'react'
import PropTypes from 'prop-types'

class Album extends React.Component {
  render() {
    return (
      <section>
        <img src={ this.props.album.image } alt={ this.props.album.title } />
        <h2>{ this.props.album.title }</h2>
        <p>{ this.props.album.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ this.props.album.releaseDate.day }/${ this.props.album.releaseDate.month }/${ this.props.album.releaseDate.year }` }
        </p>
        <p>Gravadora: { this.props.album.others.recordCompany }</p>
        <p>Formatos: { this.props.album.others.formats }</p>
      </section>
    );
  }
}

Album.propTypes = {
  album: PropTypes.exact({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.exact({
      year: PropTypes.string,
      month: PropTypes.string,
      day: PropTypes.string,
    }),
    others: PropTypes.exact({
      recordCompany: PropTypes.string,
      formats: PropTypes.string
    }),
  })
}

export default Album;