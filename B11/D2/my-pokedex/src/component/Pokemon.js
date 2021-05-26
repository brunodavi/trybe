import React from 'react'
import './Pokemon.css'
import pokemons from '../data'

class Pokemon extends React.Component {
  render() {
    return (
      pokemons.map(({name, type, averageWeight, image, moreInfo}) => (
        <div className="pokemon">
          <h3>{name}</h3>
          <div className="info">
            <div className="description">
              <div>{type}</div>
              <div>{averageWeight.value} kg</div>
              <div><a href={moreInfo}>more</a></div>
            </div>
            <div>
              <img src={image} alt={name}/>
            </div>
          </div>
        </div>
      ))
    )
  }
}

export default Pokemon