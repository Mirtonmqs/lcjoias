// Seleciona todos os botões de compra
const comprarButtons = document.querySelectorAll('.comprar-btn');

// Adiciona um evento de clique a cada botão
comprarButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtém informações do item
    const itemId = button.dataset.item; // identificador único do item
    const itemName = 1; // nome do item
    const itemPrice = 10.99; // preço do item
    const itemQuantity = 1; // quantidade padrão

    // Adiciona o item ao carrinho
    adicionarAoCarrinho(itemId, itemName, itemPrice, itemQuantity);
  });
});

// Função para adicionar o item ao carrinho
function adicionarAoCarrinho(itemId, itemName, itemPrice, itemQuantity) {
  // Aqui você pode implementar a lógica para adicionar o item ao carrinho.
  // Pode ser armazenado em uma variável JavaScript, em um cookie, no localStorage ou em um banco de dados.
  // Por exemplo:
  const item = {
    id: itemId,
    nome: itemName,
    preço: itemPrice,
    quantidade: itemQuantity
  };

  // Depois de adicionar o item ao carrinho, você pode redirecionar o usuário para a página do carrinho ou exibir uma mensagem de confirmação.
}
