const shoppingList = (groceries) => {
  let formattedList = "";
  groceries.forEach((grocery) => {
    formattedList += `${grocery.item}:${grocery.quantity}\n`;
  });
  return formattedList;
};

let groceries = [
  { item: "Milk", quantity:"4 ltrs" },
  { item: "Rice", quantity:"20 kgs" },
  { item: "Oils", quantity:"10 ltrs" },
  { item: "Meat", quantity:"30 kgs" },
];

console.log(shoppingList(groceries));
