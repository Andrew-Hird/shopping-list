import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <li>{this.props.item} - {this.props.cat}</li>
      </div>
    )
  }
})
