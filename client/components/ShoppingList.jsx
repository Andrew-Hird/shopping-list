import React from 'react'
import Bakery from './Bakery'
import Produce from './Produce'
import Chilled from './Chilled'
import Other from './Other'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>This is your shopping list!!</h2>
        <Bakery bakery={this.props.bakery} />
        <Produce produce={this.props.produce} />
        <Chilled chilled={this.props.chilled} />
        <Other other={this.props.other} />
      </div>
    )
  }
})
