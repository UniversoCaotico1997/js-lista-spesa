// Creiamo una lista della spesa e stampiamola in console 

// Creiamo un lista della spesa
const shoppingList = [
    `Pane`,
    `Pasta`,
    `Latte`,
    `Uova`,
    `Pollo`,
    `Carne`
]

const shoppingListElement = document.querySelector(`ul`)
// Utilizziamo il cicloo while
let i = 0;

while (i < shoppingList.length) {
    const item = shoppingList[i];
    // console.log(item);



      // stampiamo a schermo tramite insertAdjacentHTML
    const listElement = `<li>${item}</li>`;
    shoppingListElement.insertAdjacentHTML(`beforeend`,`<li>${item}</li>`);


    i++;
}