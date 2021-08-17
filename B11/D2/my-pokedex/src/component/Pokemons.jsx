import React from 'react'

import './Pokemons.css'

class Pokemons extends React.Component {
  constructor() {
    super()
    this.pokeFilter = this.pokeFilter.bind(this)
    this.filterTypes = this.filterTypes.bind(this)
    this.setType = this.setType.bind(this)
    this.state = {
      type: 'All'
    }
  }

  filterTypes() {
    const { pokemons } = this.props
    return pokemons.map((poke) => (poke.type))
    .reduce((arr, type) => {
      if (!arr.includes(type)) {
        arr.push(type)
        return arr
      }
      return arr
    }, [])
  }

  setType(event) {
    const val = event.target.innerText
    this.setState({ type: val })
  }

  pokeFilter(type) {
    const { pokemons } = this.props

    const result = (type === 'All')
    ? pokemons
    : pokemons.filter((pokemon) => (pokemon.type === type))

    return result.map(({name, type, averageWeight, image, moreInfo}) => (
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
  }
  render() {
    return (
      <div>
        <div className="buttons">
        <button className="button" onClick={this.setType}>All</button>
        {this.filterTypes().map((type) => (
          <button className="button" onClick={this.setType}>{type}</button>
        ))}
        </div>
        <div className="list">
          {this.pokeFilter(this.state.type)}
        </div>
      </div>
    )
  }
}

export default Pokemons