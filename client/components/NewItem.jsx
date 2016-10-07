import React from 'react'

let itemInput = null

export default React.createClass({
  render() {
    return (
      <div>
        <input
          id="new-item"
          name="new-item"
          placeholder="enter item"
          ref={function (input) {
            itemInput = input
          }}/>
        <select>
          <option value="bakery">Bakery</option>
          <option value="produce">Produce</option>
          <option value="chilled">Chilled</option>
          <option value="other">Other</option>
        </select>
        <input type="submit" value="add" onClick={() => this.props.add(itemInput.value)} />
      </div>
    )
  }
})
