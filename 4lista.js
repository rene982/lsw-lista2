const alunos = [
  { nome: "Ana", media: 8.5 },
  { nome: "Bruno", media: 6 },
  { nome: "Carla", media: 9 },
  { nome: "Davi", media: 5.5 }
];

 const primeiroAbaixo = alunos.find(a => a.media < 7);
 console.log(primeiroAbaixo.nome);

 const temNota9 = alunos.some(a => a.media >= 9);
 console.log(temNota9);

  const todosAprovados = alunos.every(a => a.media >= 7);
console.log(todosAprovados);