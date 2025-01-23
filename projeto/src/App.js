import './App.css';
import ComecarJogo from './components/ComecarJogo';
import Jogando from './components/Jogando';
import TerminoJogo from './components/TerminoJogo';
import { useCallback, useState } from "react";

const estagios = [
  {nome: "inicio" },
  {nome: "jogando" },
  {nome: "fim" }
];

function App() {
  const [estagioJogo, setEstagioJogo] = useState(estagios[0].nome);
  const iniciarJogo = useCallback(() => {
    let numSort = Math.floor(Math.random() * 100) + 1;
    localStorage.setItem('sorteado' , numSort)
    setEstagioJogo(estagios[1].nome)});

  const finalizarJogo = useCallback(() => {
    setEstagioJogo(estagios[2].nome)
  } )
  const fechar = useCallback(() => {
    window.close()
  } )
  const recomecar = useCallback(() => {
    setEstagioJogo(estagios[0].nome)
  } )

  return (
    <div>
      {estagioJogo === "inicio" && <ComecarJogo iniciarJogo={iniciarJogo}/>}
      {estagioJogo === "jogando" && <Jogando finalizarJogo={finalizarJogo}/>}
      {estagioJogo === "fim" && <TerminoJogo fechar={fechar}
      recomecar={recomecar}/>}
    </div>
    
  );
};

export default App;
