function calculateAverage() {
    // Obtém os valores dos campos
    const name = document.getElementById('name').value;
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);

    // Verifica se as notas são válidas
    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
        document.getElementById('result').innerText = 'Por favor, insira todas as notas corretamente.';
        return;
    }

    // Calcula a média
    const total = grade1 + grade2 + grade3;
    const average = total / 3;

    // Determina o status de aprovação
    const status = average >= 7 ? 'Aprovado!' : 'Reprovado!';

    // Mostra o resultado
    const resultMessage = `Nome do Aluno: ${name}\nMédia: ${average.toFixed(2)}\nStatus: ${status}`;
    document.getElementById('result').innerText = resultMessage;
}
