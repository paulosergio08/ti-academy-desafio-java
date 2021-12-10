var frutas = [
	{fruDesc: "Mamão", frutPreco: 6.40},
	{fruDesc: "Laranja", frutPreco: 2.80},
	{fruDesc: "Abacaxi", frutPreco: 6.20},
    {fruDesc: "Uva", frutPreco: 9.30},
    {fruDesc: "Pêssego", frutPreco: 3.20},
    {fruDesc: "Limão", frutPreco: 4.40},
]

window.onload = function(){

    (()=>{
        let mostraFrutasCliente = document.querySelector("#content-frutas > ul#frutas");

        for (let idx in frutas){
            mostraFrutasCliente.innerHTML += `<li class=itemFruta data-preco=${frutas[idx].frutPreco}>${frutas[idx].fruDesc}</li>`

        }
    })(frutas)




const itemFruta = document.querySelectorAll("#frutas > li.itemFruta");
const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
const armazenaItem = [];
var totalPedido = 0;

itemFruta.forEach((item)=>{
    item.addEventListener('click',()=>{
    
        li = document.createElement("li");

        if(armazenaItem.indexOf(item.textContent) == -1){
            armazenaItem.push(item.textContent);
            cestaDoCliente.appendChild(li).textContent=item.textContent;
            totalPedido += Number(item.dataset.preco);
            mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'});
        }else{
            alert(`Este item ${item.textContent} já está na cesta`);
        }
    });
})
  const removeCestaDoCliente=document.querySelectorAll("ul#cestaDoCliente");
  const lista = document.querySelector("ul#cestaDoCliente");
          removeCestaDoCliente.forEach((item) => {
      item.addEventListener('click', (itemCesta) => {

          var idx = armazenaItem.indexOf(itemCesta.target.textContent);
          if (idx > -1) {
              totalPedido -= Number(itemCesta.target.dataset.preco);
              cestaDoCliente.removeChild(lista.childNodes[idx]);
              armazenaItem.splice(idx, 1);
              mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          }
      })
  })

}