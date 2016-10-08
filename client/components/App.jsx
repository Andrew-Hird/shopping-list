import React from 'react'

import shoppingapi from './shoppingapi'

import Header from './Header'
import ShoppingList from './ShoppingList'
import NewItem from './NewItem'

export default React.createClass({
  getInitialState() {
    return {
      list: [],
      bakery: [],
      produce: [],
      chilled: [],
      other: []
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
    this.setState({
      bakery: list[0],
      produce: list[1],
      chilled: list[2],
      other: list[3]
    })
  },

  render() {
    return (
      <div>
        <Header text="What do you want to buy?"/>
        <NewItem add={this.add}/>
        <ShoppingList className="listHolder"
        bakery={this.state.bakery}
        produce={this.state.produce}
        chilled={this.state.chilled}
        other={this.state.other} />
      </div>
    )
  }
})
