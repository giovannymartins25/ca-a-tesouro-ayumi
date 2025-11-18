export default function handler(req, res) {
  const puzzles = [
    { id: 1, title: 'O primeiro mimo (De muitos)', clue: 'Qual a primeira coisa que eu comprei pra vc?', answer: 'temaki' },
    { id: 2, title: 'A nosssa musica', clue: 'qual a "nossa música""? (a gente se assumiu com ela kk)', answer: 'Os anjos cantam' },
    { id: 3, title: 'Hein?', clue: 'Você me ama?', answer: 'sim' }
  ]
  res.status(200).json({ puzzles })
}
