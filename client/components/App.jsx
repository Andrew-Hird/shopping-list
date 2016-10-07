import React from 'react'

import shoppingapi from './shoppingapi'

import Header from './Header'
import ShoppingList from './ShoppingList'
import NewItem from './NewItem'

export default React.createClass({
  getInitialState() {
    return {
      list: []
    }
  },

  componentDidMount(){
    this.getList()
  },

  getList(){
    shoppingapi.getList(this.renderList)
  },

  add(item) {
    shoppingapi.add(item, this.getList)
  },

  renderList(err, list){
    this.setState({ list: list })
  },

  render() {
    return (
      <div>
        <Header text="What do you want to buy?"/>
        <NewItem add={this.add}/>
        <ShoppingList list={this.state.list} />
      </div>
    )
  }
})
