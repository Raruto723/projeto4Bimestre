import './terminoJogo.css';

const TerminoJogo = ({ fechar, recomecar }) => {
    const recorde = localStorage.getItem('recorde');
    const pontos = localStorage.getItem('pontosFinal');
    
    return (
        <div className="termino-container">
            <h1>Fim do jogo!</h1>
            <h2>O recorde é {recorde}</h2>
            <h2>Sua pontuação final é: <span>{pontos}</span></h2>
            <div className="botoes">
                <button onClick={fechar}>Finalizar jogo</button>
                <button onClick={recomecar}>Recomeçar</button>
            </div>
        </div>
    );
};

export default TerminoJogo;
