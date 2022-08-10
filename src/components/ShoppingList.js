import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchResult, setSearchResult] = useState("");
  const [itemsToFilter, setItemsToFilter] = useState(items);
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchResult(event.target.value)
  }

  function handleFormSubmit(item) {

    setItemsToFilter([...itemsToFilter, item])
  }

  

  const itemsToDisplay = itemsToFilter.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchFilteredItems = itemsToDisplay.filter(item => {
    if (searchResult === "") return true;

    return item.name.toLowerCase().includes(searchResult.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {searchFilteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
