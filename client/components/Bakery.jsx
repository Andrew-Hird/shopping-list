import React from 'react'
import BakeryItem from './BakeryItem'

export default React.createClass({
  render() {
    return (
      <div className="cat">
      <h3>Bakery</h3>
    <ul>
      {this.props.bakery.map((bakery, i) => {
        return <BakeryItem
          key={i}
          item={bakery} />
      })}
        </ul>
      </div>
    )
  }
})
