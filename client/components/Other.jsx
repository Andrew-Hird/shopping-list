import React from 'react'
import OtherItem from './OtherItem'

export default React.createClass({
  render() {
    return (
      <div className="cat">
      <h3>Other</h3>
    <ul>
      {this.props.other.map((other, i) => {
        return <OtherItem
          key={i}
          item={other} />
      })}
        </ul>
      </div>
    )
  }
})
