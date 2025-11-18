import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function Level(){
const router = useRouter()
const { id } = router.query
const [puzzle, setPuzzle] = useState(null)
const [answer, setAnswer] = useState('')
const [status, setStatus] = useState('')


useEffect(()=>{
if(!id) return
fetch('/api/puzzles').then(r=>r.json()).then(d=>{
const p = d.puzzles.find(x=>String(x.id)===String(id))
setPuzzle(p)
})
},[id])


if(!puzzle) return <div className="container"><div className="small">Carregando pista...</div></div>


const submit = ()=>{
if(answer.trim().toLowerCase() === String(puzzle.answer).toLowerCase()){
const nextId = Number(puzzle.id) + 1
// se existir próxima pista -> redireciona
fetch('/api/puzzles').then(r=>r.json()).then(d=>{
const exists = d.puzzles.some(x=>x.id===nextId)
if(exists) router.push(`/level/${nextId}`)
else router.push('/finish')
})
} else {
setStatus('err')
}
}


return (
<div className="container">
<div className="header">
<div className="logo">🌷</div>
<div>
<h1 className="title">Pista {puzzle.id}: {puzzle.title}</h1>
<div className="small">Digite a resposta correta para prosseguir.</div>
</div>
</div>


<div className="puzzle-card">
<div>{puzzle.clue}</div>
<div className="hint">Dica: a resposta não diferencia maiúsculas/minúsculas.</div>
<div className="input-row">
<input placeholder="Sua resposta..." value={answer} onChange={e=>{setAnswer(e.target.value); setStatus('')}} />
<button className="button" onClick={submit}>Enviar</button>
</div>
{status==='err' && <div className="success" style={{background:'#ffefef',borderColor:'#ffb6c1'}}>Resposta errada — tenta de novo com calma 💪</div>}


<div className="center">
  <Link href="/" className="home-button-wrapper">
    Voltar ao início
  </Link>
</div>

</div>
</div>
)
}