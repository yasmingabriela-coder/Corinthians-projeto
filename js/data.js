// Dados da História do Corinthians
const corinthiansData = {
  fundacao: {
    ano: 1910,
    data: "1º de setembro de 1910",
    local: "Bairro do Bom Retiro, São Paulo",
    fundadores: ["Anselmo Corrêa", "Antônio Pereira", "Carlos Silva", "Joaquim Ambrose", "Rafael Perrone"],
    inspiracao: "Corinthian Football Club (Inglaterra)",
    descricao: "Às 20h30 do dia 1º de setembro, à luz de um lampião, na esquina das ruas José Paulino e Cônego Martins, no bairro do Bom Retiro, cinco trabalhadores fundaram o Sport Club Corinthians Paulista, inspirados pela turnê do Corinthian Football Club no Brasil."
  },
  
  titulos: [
    {
      id: 1,
      nome: "Mundial de Clubes",
      ano: 2000,
      categoria: "internacional",
      descricao: "Primeiro Mundial de Clubes da FIFA, vencido nos pênaltis contra o Vasco no Maracanã",
      destaque: "Dida defendeu pênalti decisivo",
      imagem: "mundial-2000.jpg"
    },
    {
      id: 2,
      nome: "Campeonato Brasileiro",
      ano: 1990,
      categoria: "nacional",
      descricao: "Primeiro título brasileiro do Corinthians, com mais de 100 mil pessoas no Morumbi",
      destaque: "Tupãzinho marcou o gol do título",
      imagem: "brasileiro-1990.jpg"
    },
    {
      id: 3,
      nome: "Campeonato Brasileiro",
      ano: 1998,
      categoria: "nacional",
      descricao: "Bicampeonato brasileiro com vitória sobre o Cruzeiro",
      destaque: "Marcelinho Carioca artilheiro com 19 gols",
      imagem: "brasileiro-1998.jpg"
    },
    {
      id: 4,
      nome: "Campeonato Brasileiro",
      ano: 1999,
      categoria: "nacional",
      descricao: "Tricampeonato brasileiro contra o Atlético-MG",
      destaque: "Luizão artilheiro com 21 gols",
      imagem: "brasileiro-1999.jpg"
    },
    {
      id: 5,
      nome: "Campeonato Brasileiro",
      ano: 2005,
      categoria: "nacional",
      descricao: "Tetracampeonato brasileiro com Carlitos Tevez",
      destaque: "Tevez eleito melhor jogador da competição",
      imagem: "brasileiro-2005.jpg"
    },
    {
      id: 6,
      nome: "Campeonato Brasileiro",
      ano: 2011,
      categoria: "nacional",
      descricao: "Pentacampeonato brasileiro com empate contra o Palmeiras",
      destaque: "Homenagem ao Doutor Sócrates",
      imagem: "brasileiro-2011.jpg"
    },
    {
      id: 7,
      nome: "Copa Libertadores",
      ano: 2012,
      categoria: "internacional",
      descricao: "Primeira Libertadores da história, vencendo o Boca Juniors",
      destaque: "Emerson marcou dois gols na final",
      imagem: "libertadores-2012.jpg"
    },
    {
      id: 8,
      nome: "Mundial de Clubes",
      ano: 2012,
      categoria: "internacional",
      descricao: "Segundo Mundial, vencendo o Chelsea no Japão",
      destaque: "Guerrero marcou o gol do título",
      imagem: "mundial-2012.jpg"
    },
    {
      id: 9,
      nome: "Recopa Sul-Americana",
      ano: 2013,
      categoria: "internacional",
      descricao: "Vitória sobre o São Paulo nos dois jogos da final",
      destaque: "Quarto título em 12 meses",
      imagem: "recopa-2013.jpg"
    },
    {
      id: 10,
      nome: "Campeonato Brasileiro",
      ano: 2015,
      categoria: "nacional",
      descricao: "Hexacampeonato brasileiro com quatro rodadas de antecedência",
      destaque: "Primeiro título na Arena Corinthians",
      imagem: "brasileiro-2015.jpg"
    },
    {
      id: 11,
      nome: "Campeonato Brasileiro",
      ano: 2017,
      categoria: "nacional",
      descricao: "Heptacampeonato brasileiro com primeiro turno invicto",
      destaque: "Melhor primeiro turno da história",
      imagem: "brasileiro-2017.jpg"
    },
    {
      id: 12,
      nome: "Copa do Brasil",
      ano: 1995,
      categoria: "nacional",
      descricao: "Primeira Copa do Brasil da história do clube",
      destaque: "Vitória sobre o Grêmio",
      imagem: "copa-brasil-1995.jpg"
    },
    {
      id: 13,
      nome: "Copa do Brasil",
      ano: 2002,
      categoria: "nacional",
      descricao: "Bicampeonato da Copa do Brasil",
      destaque: "Vitória sobre o Brasiliense",
      imagem: "copa-brasil-2002.jpg"
    },
    {
      id: 14,
      nome: "Copa do Brasil",
      ano: 2009,
      categoria: "nacional",
      descricao: "Tricampeonato da Copa do Brasil",
      destaque: "Vitória sobre o Internacional",
      imagem: "copa-brasil-2009.jpg"
    },
    {
      id: 15,
      nome: "Campeonato Paulista",
      ano: 1914,
      categoria: "estadual",
      descricao: "Primeiro título paulista da história",
      destaque: "Apenas 4 anos após a fundação",
      imagem: "paulista-1914.jpg"
    },
    {
      id: 16,
      nome: "Campeonato Paulista",
      ano: 2024,
      categoria: "estadual",
      descricao: "30º título paulista",
      destaque: "Vitória sobre o Santos",
      imagem: "paulista-2024.jpg"
    }
  ],
  
  idolos: [
    {
      id: 1,
      nome: "Sócrates",
      posicao: "Meia",
      periodo: "1978-1984",
      descricao: "Doutor Sócrates, símbolo da democracia corinthiana",
      conquistas: ["2x Paulista"]
    },
    {
      id: 2,
      nome: "Rivelino",
      posicao: "Meia",
      periodo: "1965-1974",
      descricao: "Craque da seleção brasileira de 1970",
      conquistas: ["3x Paulista"]
    },
    {
      id: 3,
      nome: "Ronaldo",
      posicao: "Atacante",
      periodo: "2009-2011",
      descricao: "Fenômeno, maior artilheiro de Copas do Mundo",
      conquistas: ["Copa do Brasil 2009", "Brasileiro 2011"]
    },
    {
      id: 4,
      nome: "Cássio",
      posicao: "Goleiro",
      periodo: "2012-2023",
      descricao: "Herói do Mundial de 2012, Bola de Ouro",
      conquistas: ["Libertadores 2012", "Mundial 2012", "3x Brasileiro"]
    },
    {
      id: 5,
      nome: "Marcelinho Carioca",
      posicao: "Meia",
      periodo: "1994-2000, 2005-2008",
      descricao: "Pé de Anjo, especialista em cobranças de falta",
      conquistas: ["2x Brasileiro", "Mundial 2000"]
    },
    {
      id: 6,
      nome: "Neto",
      posicao: "Meia",
      periodo: "1989-1993",
      descricao: "Capitão do primeiro título brasileiro",
      conquistas: ["Brasileiro 1990"]
    }
  ],
  
  estadios: [
    {
      nome: "Arena Corinthians",
      inauguracao: 2014,
      capacidade: "49.205 pessoas",
      localizacao: "Itaquera, São Paulo",
      descricao: "Casa do Corinthians desde 2014, construída para a Copa do Mundo",
      status: "atual"
    },
    {
      nome: "Parque São Jorge",
      inauguracao: 1928,
      capacidade: "Centro de Treinamento",
      localizacao: "Tatuapé, São Paulo",
      descricao: "Sede social e CT do clube",
      status: "ativo"
    }
  ],
  
  curiosidades: [
    "O Corinthians é o único time brasileiro bicampeão mundial",
    "Possui a segunda maior torcida do Brasil",
    "Fundado por operários do bairro do Bom Retiro",
    "O nome foi inspirado em um time inglês",
    "Ficou 23 anos sem conquistar títulos (1954-1977) - período chamado de 'Fila'",
    "A Democracia Corinthiana (1982-1984) foi um movimento político dentro do clube",
    "Primeiro clube brasileiro a ter mais de 30 milhões de torcedores"
  ],
  
  resumoTitulos: {
    internacionais: {
      mundial: 2,
      libertadores: 1,
      recopa: 1,
      total: 4
    },
    nacionais: {
      brasileiro: 7,
      copaDoBrasil: 3,
      supercopa: 1,
      total: 11
    },
    estaduais: {
      paulista: 30,
      rioSaoPaulo: 5,
      total: 35
    },
    totalGeral: 50
  }
};

// Exportar dados
if (typeof module !== 'undefined' && module.exports) {
  module.exports = corinthiansData;
}