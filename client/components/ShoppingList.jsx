import React from 'react'
import ShoppingItem from './ShoppingItem'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>This is your shopping list!!</h2>
        <ul>
          {this.props.list.map((item) => {
            return <ShoppingItem
              item={item} />
          })}
        </ul>
      </div>
    )
  }
})
