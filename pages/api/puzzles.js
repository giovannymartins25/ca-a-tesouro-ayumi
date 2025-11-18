export default function handler(req, res) {
  const puzzles = [
    { id: 1, title: 'A primeira lembrança', clue: 'Procure onde guardo algo que cheira como tarde de verão — é nosso lugar de snacks.', answer: 'salgadinho' },
    { id: 2, title: 'A playlist escondida', clue: 'O nome da música que sempre toca quando a gente ri junto: começa com a letra P.', answer: 'praia' },
    { id: 3, title: 'O bilhete no caderno', clue: 'O número que eu sempre esqueço mas que você lembra: soma 2+2.', answer: '4' }
  ]
  res.status(200).json({ puzzles })
}
