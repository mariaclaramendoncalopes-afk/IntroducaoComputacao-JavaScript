function calcularMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3)/3;
    if(media >= 7){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

console.log("Aluno 1: " + calcularMedia(7, 8, 6.5));
console.log("Aluno 2: " + calcularMedia(4, 2, 6));