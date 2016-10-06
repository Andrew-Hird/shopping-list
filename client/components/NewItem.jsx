import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <input type="text" placeholder="enter item"/>
        <select>
          <option value="bakery">Bakery</option>
          <option value="produce">Produce</option>
          <option value="chilled">Chilled</option>
          <option value="other">Other</option>
        </select>
        <input type="submit" value="add" />
      </div>
    )
  }
})
