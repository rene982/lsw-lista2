const recebido = '{"produto":"Monitor","preco":900,"estoque":4}';
const produto = JSON.parse(recebido);

produto.preco = produto.preco * 0.9;
produto.estoque -= 1;

console.log(typeof produto);
const json = JSON.stringify(produto);
console.log(json);
console.log(typeof json);