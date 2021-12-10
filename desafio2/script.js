window.onload = function(){


    function resultadoCep(dadosCep){
        for(let campo in dadosCep){
            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value = dadosCep[campo]
            }
        }
    }

    let dadosCep = async function(cep){

        let url = `https://viacep.com.br/ws/${cep}/json/`;
        try{
             let dadosFetch = await fetch(url);
             let dadosJson = await dadosFetch.json();
             resultadoCep(dadosJson);
       } catch(erro ){
             alert("erro no cep" );
      }

    }

    const btnBuscar = document.querySelector("#botom");
    const CEP_      = document.querySelector("#cep");
    const Logradouro = document.querySelector("#logradouro");
    const Bairro     = document.querySelector("#bairro");
    const Localidade     = document.querySelector("#localidade");
    const Uf     = document.querySelector("#uf");

    btnBuscar.addEventListener('click', function(){
        dadosCep(CEP_.value);
        dadosCep(Logradouro.value);
        dadosCep(Bairro.value);
        dadosCep(Localidade.value);
        dadosCep(Uf.value);
    })
    

}