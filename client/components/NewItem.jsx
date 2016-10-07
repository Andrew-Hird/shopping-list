import React from 'react'

let itemInput = []
let catInput = []

let itemData = {}
let itemArr = []

export default React.createClass({
  getData () {
    itemData = {
      item: itemInput.value,
      cat: catInput.value
    }
    itemArr.push(itemData)
    return this.props.add(itemData)
  },

  render() {
    return (
      <div className="new">
        <input
          id="new-item"
          name="new-item"
          placeholder="enter item"
          ref={function (input) {
            itemInput = input
          }}/>
        <select ref={function (input) {
            catInput = input
          }}>
          <option value="bakery">Bakery</option>
          <option value="produce">Produce</option>
          <option value="chilled">Chilled</option>
          <option value="other">Other</option>
        </select>
        <input type="submit" value="add" onClick={() =>
        this.getData() }
        />
      </div>
    )
  }
})
