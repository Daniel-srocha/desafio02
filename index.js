function calcularSaldoERanking(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas

    // Determina o nível com base no número de vitórias
    let nivel
    if (vitorias <= 10) {
        nivel = "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata"
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    // Exibe a mensagem
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`)
}

calcularSaldoERanking(30, 15)
