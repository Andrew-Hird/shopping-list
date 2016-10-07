import React from 'react'
import ShoppingItem from './ShoppingItem'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>This is your shopping list!!</h2>
        <ul>
          {this.props.allItems.map((allItems, i) => {
            return <ShoppingItem
              key={i}
              item={allItems.item}
              cat={allItems.cat} />
        })}
        </ul>
      </div>
    )
  }
})
