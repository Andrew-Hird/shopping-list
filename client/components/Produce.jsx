import React from 'react'
import ProduceItem from './ProduceItem'

export default React.createClass({
  render() {
    return (
      <div>
      <h3>Produce:</h3>
    <ul>
      {this.props.produce.map((produce, i) => {
        return <ProduceItem
          key={i}
          item={produce} />
      })}
        </ul>
      </div>
    )
  }
})
