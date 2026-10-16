
const disciplina = {
  nome: "Web",
  cargaHoraria: 60,
  professor: "john"
};

disciplina.cargaHoraria = 80;

disciplina.periodo = 2;

delete disciplina.professor;

console.log(disciplina);

console.log(disciplina["nome"]);