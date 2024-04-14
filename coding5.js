const shoppingList = (groceries) => {
  let formattedList = "";
  groceries.forEach((grocery) => {
    formattedList += `${grocery.item}:${grocery.quantity}\n`;
  });
  return formattedList;
};

let groceries = [
  { item: "Carrots", quantity: 4 },
  { item: "Hummus", quantity: 6 },
  { item: "Pesto", quantity: 33 },
  { item: "Rigatoni", quantity: 2 },
];

console.log(shoppingList(groceries));
