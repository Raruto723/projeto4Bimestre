import { useState, useEffect } from 'react';
import './jogando.css';

const Jogando = ({ finalizarJogo }) => {
    const [tentativas, setTentativas] = useState(7);
    const [pontos, setPonto] = useState(0);
    const [valor, setValor] = useState("");
    const [aviso, setAviso] = useState("");
    const [recorde, setRecorde] = useState(0);

    // Carrega o recorde salvo no localStorage quando o componente é montado
    useEffect(() => {
        const recordeSalvo = localStorage.getItem('recorde');
        if (recordeSalvo) {
            setRecorde(parseInt(recordeSalvo, 10));
        }
    }, []);

    // Função para enviar a tentativa do jogador
    const enviarTentativa = () => {
        const num = parseInt(localStorage.getItem('sorteado'), 10);
        const tentativaAtual = parseInt(valor, 10);

        if (isNaN(tentativaAtual)) {
            setAviso("Por favor, insira um número válido!");
            return;
        }

        if (tentativas > 0) {
            if (tentativaAtual === num) {
                setAviso(
                    <>
                        Parabéns! Você acertou! <br />
                        Novo número sorteado. <br />
                        Continue jogando. Você ganhou mais duas chances!
                    </>
                );
                setPonto(pontos + 1);
                setTentativas(tentativas + 2);
                const numSort = Math.floor(Math.random() * 100) + 1;
                localStorage.setItem('sorteado', numSort);
            } else {
                setTentativas(tentativas - 1);
                setAviso(tentativaAtual < num ? "Para cima!" : "Para baixo!");
            }
        }

        if (tentativas === 1) {
            setAviso("Suas chances acabaram!");
            localStorage.setItem('pontosFinal', pontos);

            if (pontos > recorde) {
                setRecorde(pontos);
                localStorage.setItem('recorde', pontos);
            }
        }
    };

    return (
        <div className="App">
            <img src="img/titulo4.png" alt="titulo" className="titulo" />
            <img src="img/lucky.gif" alt="gif" className="gif" />
            <p>Chances restantes: {tentativas}</p>
            {aviso && <p className="aviso">{aviso}</p>}
            {tentativas !== 0 && (
                <form>
                    <p>Pontos: {pontos}</p>
                    <label htmlFor="escolha">
                        Digite um número de 1 até 100:
                        <input type="number" name="escolha" id="escolha" min={1} max={100} onChange={(e) => setValor(e.target.value)}/>
                    </label>
                    <button type="button" onClick={enviarTentativa}>
                        Submeter
                    </button>
                </form>
            )}
            {tentativas === 0 && (
                <div className="start">
                    <p>Você perdeu! Clique no botão abaixo para ver seu resultado.</p>
                    <button onClick={finalizarJogo}>Resultado</button>
                </div>
            )}
        </div>
    );
};

export default Jogando;
