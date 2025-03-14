//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Primeiro passo é inicializar um array para armazenar os nomes dos amigos que seram listados no HTML.
const listaDeAmigos = []; //Inicializado o array vazio para receber os nomes que forem adicionados, e a variável utilizada foi a "const" por gentenciar melhor a memória e por não ser alterada, diferente da "let" e "var".


function mostrarNoHtml(){//Mostrar a lista de amigos no HTML de forma dinâmica.
    const listaAmigos = document.getElementById("listaAmigos");//Variável que recebe o id="listaAmigos" do documento html.
        listaAmigos.innerHTML = "";//Limpa a lista de amigos, para não duplicar os nomes na lista, após adicionar um novo nome com a repetição que será feita abaixo.

//O for inicia o índice em 0 (que é o mesmo que vazio), depois fazemos uma comparação se o índice é menor que o tamanho do array de amigos, e incrementamos o índice em +1
//Pode ser lido também como: Para cada amigo na lista, faça a inserção do nome na lista de amigos.
//Enquanto o índice for menor que o tamanho do array, ele irá adicionar os nomes na lista de amigos. Se ele ficar vazio, não irá adicionar nada.
  for (let i = 0; i < listaDeAmigos.length; i++) {//Laço de repetição para percorrer o array de amigos.
//length é o que informa quanto tem de elementos no array, ou seja, quantos nomes foram adicionados na lista de amigos.
    //Criando um item de lista para cada amigo adicionado.
    const itemLista = document.createElement("li");//Cria um uma variável para receber um elemento/Tag "li" do HTML.
    itemLista.textContent = listaDeAmigos[i];//Adiciona o nome do amigo na lista de amigos pelo "itemLista.textContent" e enquanto tiver o nome de amigos na lista caso contrário o looping irá parar.
    listaAmigos.appendChild(itemLista);//Adiciona o nome do amigo na lista de amigos inserindo na lista como filho "com o appendChild() "a tag "li" já que o pai seria a "ul" que é o indicativo de lista de amigos não ordenada.

//Por fim o looping irá adicionar os nomes na lista de amigos, até que não tenha mais nomes para adicionar.    
//Não necessita de retorno, pois a função é apenas para mostrar os nomes na lista de amigos no HTML com o looping.
//Agora essa função precisa ser chamada no HTML, para que os nomes sejam exibidos na tela, e para basta criar a função de inserir o amigo.
    }
}

function adicionarAmigo() { //Função para adicionar os amigos na lista, após clicar sobre o botão "Adicionar".
    const insereNomeDoAmigo = document.getElementById("amigo"); //Variável que recebe o valor digitado (pelo id=amigo) no campo digite um nome.
    const nome = insereNomeDoAmigo.value; //Variável que recebe o valor digitado no campo digite um nome e armazena na variável "nome".

//console.log(nome); Funcionando - Mostra o nome digitado no console.

//Com os valores em mãos, agora é necessário inserir na lista de amigos.
//*Mas antes é importante fazer a verificação do campo se está vazio.
    if (nome === "") { //Se o campo estiver vazio, exibirá um alerta.

//Outra forma de usar o if é com o "!", que significa negação, ou seja, se o campo não estiver vazio, ele não exibirá o alert *if (!nome) {}* - Significa "sem nome" no campo, ou "não nome" no campo.

        alert("É necessário digitar um nome!");
        return;//Retorna para o campo de digitação, após o informar a mensagem de erro com o alert.
    } 
//Inserindo os nomes na lista de amigos, após a verificação do campo se estava vazio.
    listaDeAmigos.push(nome); //Adiciona o nome digitado na lista de amigos com o .push.
    insereNomeDoAmigo.value = ""; //Após adicionar o nome na lista, o campo de digitação é limpo, para não ficar no campo o nome digitado.
    insereNomeDoAmigo.focus(); //Após limpar o campo, o cursor volta para a caixa de digitação sem que necessite ficar clicando nela.

//console.log(listaDeAmigos); Funcionando - Exibe os nomes adicionados na lista de amigos.
    mostrarNoHtml(); //Chama a função para mostrar os nomes na lista de amigos no HTML.
}

function sortearAmigo() { //Função para sortear um amigo da lista.
    if ( listaDeAmigos.length === 0 ) {// Verifica se a lista de amigos está vazia.
        alert("Adicione amigos para realizar o sorteio!");
        return
    }
    const sorteio = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];//nessa linha de código, o "Math.random()" gera um número aleatório entre 0 e 1 (lembrando que nunca chega em 1, ficando sempre em número decimal), e o "Math.floor()" arredonda para baixo o número sorteado para que não fique com casas decimais e sim número inteiro. O Math.random() * listaDeAmigos.length gera um número aleatório entre 0 e o tamanho da lista de amigos.
    const resultado = document.getElementById("resultado");//Variável que recebe o id="resultado" do documento html.
    resultado.innerHTML = `O Felizardo Foi: ${sorteio}`;//Exibe o nome do amigo sorteado no html pelo innerHTML.
//Limpando a lista dos amigos que foram inseridos, após o sorteio.
    let limparLista = document.getElementById("listaAmigos");//Variável que recebe o id="listaAmigos" do documento html.
    limparLista.innerHTML = "";//Limpa a lista de amigos, para não duplicar os nomes na lista.

//Abaixo foi realizado a remoção do nome que foi sorteado na lista.
    listaDeAmigos.splice(listaDeAmigos.indexOf(sorteio), 1);//Remove o nome do amigo sorteado da lista de amigos até não restar nenhum nome caso necessite.
//O "indexOf" retorna o índice do elemento que foi sorteado (em "sorteio"), e o "splice" remove o elemento da lista de amigos (que veio na variável "sorteio") o "1" é a quantidade de elementos que será removido, ou seja, o nome do amigo que foi sorteado na variável ("sorteio").

//Caso queira mostrar os nomes dos amigos após o sorteio, basta descomentar a linha abaixo.  

//  MostrarNoHtml();//Chama a função para mostrar os nomes na lista de amigos no HTML.    
}