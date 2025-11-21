import Link from 'next/link'
import { useEffect, useState } from 'react'
import Head from "next/head";

<Head>
  <title>Caça ao Tesouro ❤️</title>
</Head>

export default function Home(){
const [puzzles,setPuzzles] = useState([])
useEffect(()=>{fetch('/api/puzzles').then(r=>r.json()).then(d=>setPuzzles(d.puzzles))},[])
return (
<div className="container">
<div className="header">
<div className="logo">❤️</div>
<div>
<h1 className="title">Caça ao Tesouro do Amor</h1>
<div className="small">Um jogo de pistas pra a Ayumi</div>
</div>
</div>


<div className="puzzle-card">
<h2>Como funciona</h2>
<ol>
<li>Acesse a primeira pista</li>
<li>Responda corretamente para liberar a próxima</li>
<li>No final: mensagem fofa</li>
</ol>
<div style={{marginTop:12}}>
{puzzles.length>0 ? (
<div style={{ display: "flex", justifyContent: "center" }}>
  <Link href="/level/1" className="home-button-wrapper">
    Começar
  </Link>
</div>
):(<div className="small">Carregando pistas...</div>)}
</div>
</div>
</div>
)
}