import React from 'react'

import Header from './Header'
import ShoppingList from './ShoppingList'
import NewItem from './NewItem'

export default React.createClass({
  render() {
    return (
      <div>
        <Header text="What do you want to buy?"/>
        <NewItem />
        <ShoppingList />
      </div>
    )
  }
})
