import {useState } from 'react';
import './jogando.css'

const Jogando = ({finalizarJogo}) => {
    const [tentativas, setTentativas] = useState(7);
    const [pontos, setPonto] = useState(0);
    const [valor, setValor] = useState();

    const enviarTentativa = () => {

        let num = localStorage.getItem('sorteado')
        
        alert(num)
        if (tentativas > 0) {
            if (valor === num) {
                let ponto = pontos + 1
                setPonto(ponto)
                let numSort = Math.floor(Math.random() * 100) + 1;
                localStorage.setItem('sorteado' , numSort)
            } else {
                let tentativa = tentativas - 1
                setTentativas(tentativa)
                alert(tentativas);
                    }
        }
        
    }
    
    return (
        <div className="App">
            <img src="img/titulo4.png" alt="titulo" className="titulo" />
            <img src="img/lucky.gif" alt="gif" className="gif" />
            {tentativas !== 0 && <form>
                <p>Pontos: {pontos}</p>
                <label htmlFor="escolha">
                    Digite um número de 1 até 100:
                    <input type="number" name="escolha" id="escolha" min={1} max={100} onChange={(e) => setValor(e.target.value)} />
                </label>
                <button type="button" onClick={enviarTentativa}>Submeter</button>
            </form>}
            {tentativas === 0 && <div className='start'>
            <p>Você perdeu clique no botão abaixo para ver seu resultado</p>
            <button onClick={finalizarJogo} >Resultado</button>
            </div>}
            <p>Chances restantes: {tentativas} </p>

        </div>
    );
};

export default Jogando;
