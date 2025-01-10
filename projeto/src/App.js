import './App.css';
import ComecarJogo from './components/ComecarJogo';
import Jogando from './components/Jogando';
import TerminoJogo from './components/TerminoJogo';

const estagios = [
  { id: 1, nome: "inicio" },
  { id: 2, nome: "jogando" },
  { id: 3, nome: "fim" },
];
function App() {
  const estagioJogo = estagios[1].nome
  return (
    <div>
      {estagioJogo === "inicio" && <ComecarJogo/>}
      {estagioJogo === "jogando" && <Jogando/>}
      {estagioJogo === "fim" && <TerminoJogo/>}
    </div>
    
  );
}

export default App;
