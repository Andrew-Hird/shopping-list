import React from 'react'
import ChilledItem from './ChilledItem'

export default React.createClass({
  render() {
    return (
      <div>
      <h3>Chilled:</h3>
    <ul>
      {this.props.chilled.map((chilled, i) => {
        return <ChilledItem
          key={i}
          item={chilled} />
      })}
        </ul>
      </div>
    )
  }
})
