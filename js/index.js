let lista1 = ['item 3', 'item 1', 'item 2', 'item 4', 'item 6', 'item 5'];
let listaOrdenada = document.querySelector('.listaOrdenada');


function ordenarElementos() {
     listaOrdenada.innerHTML = '';
     console.log(lista1);
     let l1 = lista1.sort();
     console.log(lista1);
     l1.forEach(litem => {
          let elist = document.createElement('li');
          elist.innerText = litem;
          listaOrdenada.appendChild(elist);

     })


}

