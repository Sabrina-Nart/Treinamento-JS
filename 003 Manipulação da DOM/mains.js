//Árvore = manipula todas as tags do HTML - JS entra no HTML
document.querySelector("h1").textContent = "Hello World!"; //Capturar algo do HTML - captura um elemento e adiciona uma alteração do elemento

// document.querySelector("#title").textContent = "My title";

document.getElementById("title").textContent = "My title 1" //TextContent = escreve exatamente como se fosse um texto puro

document.querySelector("#content").innerHTML = "<h1>Título do conteúdo</h1>"; //# Procurando um id

document.querySelector("#content").innerHTML = "<h1>Título do conteúdo 2.</h1> <p>Descrição do conteúdo</p>" ;
