import React from 'react'

let status = ''

export default React.createClass({

  render() {
    return (
        <li>{this.props.item}</li>
    )
  }
})
