const cursos=[{
    curso:'HTML e CSS',
    descrição:'Aprenda tudo o que precisa de HTML e CSS !',
    duração:'tem duração de 1 mes',
    valor:500
},
{
    curso:'JavaScript',
    descrição:'Aprenda JavaScript do iniciante ao avancado !',
    duração:'tem duração de 1 mes',
    valor:900
},
{
    curso:'APIsRest',
    descrição:'Aprenda tudo o que precisa de ApisRest !',
    duração:'tem duração de 2 meses',
    valor:2000
}
]


const turmas=[
    {
    turma:'Hipátia',
    curso:'JavaScript',
    inicio:'30/11/22',
    término:'30/01/2023',
    alunos:150,
    período:'noturno',
    concluida:false
},{
    turma:'Sibyla',
    curso:'JavaScript',
    inicio:'30/10/22',
    término:'30/12/2022',
    alunos:200,
    período:'integral',
    concluida:false
},{
    turma:'Curie',
    curso:'HTML e CSS',
    inicio:'15/09/22',
    término:'15/10/2022',
    alunos:180,
    período:'noturno',
    concluida:true
},{
    turma:'Zhenye',
    curso:'HTML e CSS',
    inicio:'01/11/2022',
    término:'01/01/2023',
    alunos:80,
    período:'Integral',
    concluida:false
},{
    turma:'Clarke',
    curso:'HTML e CSS',
    inicio:'04/07/2022',
    término:'04/09/2022',
    alunos:200,
    período:'noturno',
    concluida:true
},{
    turma:'Blackwell',
    curso:'APIsRest',
    inicio:'20/03/2022',
    término:'20/06/2022',
    alunos:100,
    período:'integral',
    concluida:true
},{
    turma:'Elion',
    curso:'APIsRest',
    inicio:'12/01/2022',
    término:'12/06/2022',
    alunos:200,
    período:'noturno',
    concluida:true
},{
    turma:'Burnell',
    curso:'APIsRest',
    inicio:'18/10/2022',
    término:'18/04/2023',
    alunos:90,
    período:'integral',
    concluida:false
}]


const estudantes=[{
    estudante:'Chris Evans',
    turma:'Hipátia',
    curso:'JavaScript',
    valor:'900 Reais.',
    nParcelas: 9,
    desconto:false,
    parcelas:100

},{
    estudante:'Halle Berry',
    turma:'Burnell',
    curso:'APIsRest',
    valor:'2000 Reais.',
    nParcelas:4,
    desconto:false,
    parcelas:500

},{
    estudante:'Lashana Lynch',
    turma:'HTML e CSS',
    curso:'Hipátia',
    valor:'500 Reais.',
    nParcelas:0 ,
    desconto:true,
    parcelas:0

}]
const carrinhoCursos =[500,900,400]
const parcelarCurso=(parcelas,carrinho)=>{
    let desconto=1
    if (parcelas < 3){
        desconto -= .20
    }
   if (carrinho.length === 3 ){
        desconto -= .15
   }else if( carrinho.length===2){
        desconto -= .10
   }
   let total=0
   for(i=0; i < carrinho.length ;i++ ) {
    total += carrinho[i] 
}
const descontoFinal="20%"
if (desconto==0.8){
descontoFinal="20%"}

console.log(`O valor do pagamento é de ${total*desconto}$ com ${descontoFinal} de desconto, parcelado em 2x de ${(total*desconto)/parcelas}`)
}
console.log(parcelarCurso(2,carrinhoCursos))


 const buscarCurso = (curso)=>{
    const novoCurso= cursos.find(item=>item.curso.toLowerCase().includes(curso.toLowerCase()))
    return novoCurso
 }
    console.log(buscarCurso('api'))
 /* =>{
    for (i in cursos){
    if(cursos[i].curso.toLowerCase()===curso.toLowerCase())
    return cursos[i]
}
    return 'Curso nao encontrado'
} */





const buscarTurma=(turma)=>{
const novaTurma=turmas.filter(item => turma == item.turma)
return novaTurma
 }
 console.log(buscarTurma('Hipátia'))



const buscarEstudante=(estudante)=>{
    const novoEstudante=estudantes.find(nome => nome.estudante.toLowerCase().includes(estudante.toLowerCase())
    )
    return novoEstudante
}
console.log(buscarEstudante('ch'))

    /*     for (i in estudantes){
    if(estudantes[i].estudante.toLowerCase()===estudante.toLowerCase())
    return estudantes[i]
}
    return 'Estudante nao encontrado!'
} */






const matricular= (nome,curso,turma,nParcelas)=>{
const novoAluno= estudantes.push(
    {
    estudante:nome,
    turma:turma,
    curso:curso,
    nParcelas:nParcelas
    }
    )

    console.log(`Aluno Matriculado
    Nome:${nome}
    turma:${turma}
    Curso:${curso}`)

    console.log(estudantes[estudantes.length-1])}


console.log(matricular("Daniela Pereira","JavaScript","Clarke",3));

const carrinho=(curso)=>{
    const cursoPesquisado=curso('HTML e CSS').valor
    carrinhoCursos.push(cursoPesquisado)
}
carrinho(buscarCurso)

const relatorioEstudante=(nome)=>{
    for(i in estudantes){
        if (nome == estudantes[i].estudante ){
            console.log(`Aluno: ${estudantes[i].estudante}
            Turma: ${estudantes[i].turma}
            Curso: ${estudantes[i].curso}
            Valor Total: ${estudantes[i].valor}
            Valor Parcela: ${estudantes[i].parcelas}
            Nº Parcelas: ${estudantes[i].nParcelas}`);
        }
    }
}
relatorioEstudante('Halle Berry')
