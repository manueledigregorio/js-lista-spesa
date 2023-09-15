//creiamo un'array con all'interno i prodotti
const spesa = ['patate', 'pasta', 'pane', 'carne'];
//creare un contatore
let i = 0;
const listEl = document.getElementById('output');
//facciamo un ciclo while 
while (i < spesa.length ){

  console.log(spesa[i]);

  const item = spesa[i]
 listEl.innerHTML += `<li>${item}</li>`
 i++;
}

for(let i = 0; i< spesa.length; i++){

}



/* quando abbiamo un array di tot elementi per calcolare la sua lunghezza
  dobbiamo dare all'indicatore 0 ,cioè il punto di partenza dell'array e 
  farlo ciclare con un contatore incrementato di uno finchè lindex ha lo stesso numero della 
  lunghezza 

  a cosa serve il contatore quando scorri gli array ? a cosa indica il suo valore? e perchè lo incrementi?
   1. parte da 0 per prendere l'elemento 0 che corrisponde a quello della lista 
   1. indica il punto di partenza   
   1. lo incrementi per far scorrere gli elementi all'interno dell'array


   l'array è una sala dove i posti partono da 0  

   indice  indica il valore che hai dato all'elemento dentro l'ar, 
*/

// creiamo un ciclo while l'array deve essere uguale al contatore -1
//incrementiamo l'array con il contatore 
// stampiamo in pagina 

