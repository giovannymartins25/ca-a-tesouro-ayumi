import Link from 'next/link'
export default function Finish(){
return (
<div className="container">
<div className="header">
<div className="logo">🏆</div>
<div>
<h1 className="title">Parabéns!</h1>
<div className="small">Você resolveu todas as pistas.</div>
</div>
</div>


<div className="puzzle-card">
<h2>Mensagem Final</h2>
<p>Parabéns minha Japa ❤️‍🩹, só você consegue passar por todas as fases do meu coração.</p>
<p className="small"></p>
<Link href="/"><button className="button">Voltar ao início</button></Link>
</div>
</div>
)
}