let amigos = []; 

function adicionarAmigo(){
    const inputAmigo = document.getElementById("amigo"); 
    let nome = inputAmigo.value.trim();

    if(amigos.includes(nome)){
        alert("Este nome já existe na lista! Por favor, insira outro nome!"); 
        return; 
    }
    if(nome === "" || !isNaN(nome)){
        alert("Campo Vazio! Por favor, insira o nome de um amigo! ") 
        return;     
    }

    amigos.push(nome); 
    inputAmigo.value = "";   
    console.log(amigos); 
    inputAmigo.focus();  
    atualizarLista();

}   

function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = ""; 

    amigos.forEach((amigo, index) => { 
        const item = document.createElement('li');
        item.textContent = amigo + " ";

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "remover"; 
        botaoRemover.style.marginLeft = "10px"; 
        botaoRemover.classList.add("button-remove");
        botaoRemover.onclick = () => removerAmigo(index);

   
        item.appendChild(botaoRemover);
        listaAmigos.appendChild(item);
    }); 
} 

function removerAmigo(index) {
    amigos.splice(index, 1); 
    atualizarLista(); 
}


function sortearAmigo(){
    if(amigos.length === 0){
        alert("Adicione um amigo antes de sortear!"); 
        return; 
    } if(amigos.length < 3){
        alert("Adicione pelo menos 3 amigos para sortear!"); 
        return; 
    }

    const amigoSorteado = amigos[Math.floor(Math.random()* amigos.length)];
    const resultado = document.getElementById('resultado'); 
    resultado.innerHTML =  `<li>O amigo secreto sorteado é: ${amigoSorteado}!</li>`;
    
    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = "";
    amigos = [];
}   