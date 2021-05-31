import React from 'react'

import './Pokemons.css'

class Pokemons extends React.Component {
  constructor() {
    super()
    this.pokeFilter = this.pokeFilter.bind(this)
    this.filterTypes = this.filterTypes.bind(this)
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

  setType() {
    this.that.setState({ type: this.type })
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
        <button className="button" onClick={this.setType.bind({ type: 'All', that: this })}>All</button>
        {this.filterTypes().map((type) => (
          <button className="button" onClick={this.setType.bind({ type, that: this })}>{type}</button>
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