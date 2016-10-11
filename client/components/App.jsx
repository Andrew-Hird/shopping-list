import React from 'react'

import shoppingapi from './shoppingapi'

import Header from './Header'
import ShoppingList from './ShoppingList'
import NewItem from './NewItem'

export default React.createClass({
  getInitialState() {
    return {
      inputValue: '',
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
    this.setState({inputValue: ''})
  },

  onChange (e) {
    this.setState({ inputValue: e.target.value })
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
        <NewItem
        add={this.add}
        inputValue={this.state.inputValue}
        onChange={this.onChange} />
        <ShoppingList className="listHolder"
        bakery={this.state.bakery}
        produce={this.state.produce}
        chilled={this.state.chilled}
        other={this.state.other} />
      </div>
    )
  }
})
