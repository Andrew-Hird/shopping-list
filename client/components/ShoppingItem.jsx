import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.text}</li>
        </ul>
      </div>
    )
  }
})
