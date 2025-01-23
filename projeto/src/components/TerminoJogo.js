import './terminoJogo.css';

const terminoJogo = ({fechar,recomecar}) => {
    return (
        <div>
            <h1>Fim jogo!</h1>
            <h2>A sua pontuação é: <span></span> </h2>
            <button onClick={fechar} >Finalizar jogo</button>
            <button onClick={recomecar}>Recomeçar</button>
        </div>
    )
}

export default terminoJogo;