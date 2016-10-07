import React from 'react'

export default React.createClass({

  render() {
    return (
        <li>{this.props.item} - {this.props.cat}</li>
    )
  }
})
