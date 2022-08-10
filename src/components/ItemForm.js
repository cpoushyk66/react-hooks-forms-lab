import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [selectValue, setSelectValue] = useState("Produce");

  function handleSelectChange(event) {
    setSelectValue(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: event.target.name.value,
      category: selectValue
    };
    console.log(newItem)
    onItemFormSubmit(newItem)

    event.target.reset()
  }

  return (
    <form onSubmit={handleFormSubmit}className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleSelectChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
