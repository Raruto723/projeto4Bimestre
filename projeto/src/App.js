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
  const [estagioJogo, setEstagioJogo] = useState(estagios[1].nome);
  const iniciarJogo = useCallback(() => {
    setEstagioJogo(estagios[1].nome)});
  return (
    <div>
      {estagioJogo === "inicio" && <ComecarJogo iniciarJogo={iniciarJogo}/>}
      {estagioJogo === "jogando" && <Jogando/>}
      {estagioJogo === "fim" && <TerminoJogo/>}
    </div>
    
  );
};

export default App;
