// Creiamo una lista della spesa e stampiamola in console 

// Creiamo un lista della spesa
const shoppingList = [
    `Pane`,
    `pasta`,
    `Latte`,
    `Uova`,
    `Pollo`,
    `Carne`
]
// Utilizziamo il cicloo while
let i = 0;

while ( i < shoppingList.length) {
    const item = shoppingList[i];
    console.log(item);
   
    
    i++;
}