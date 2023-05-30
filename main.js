const somar = document.querySelector("#somar");
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
});
//Aqui estamos utilizando uma função anônima, ou seja, ela não tem nome. Também nomeada de 'arrow function', podemos utilizar: "() =>" 

function manipulaDados (operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}