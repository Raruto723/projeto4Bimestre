import './terminoJogo.css';

const TerminoJogo = ({ fechar, recomecar }) => {
    const recorde = localStorage.getItem('recorde');
    const pontos = localStorage.getItem('pontosFinal');
    
    return (
        <div className="termino">
            <img src="img/titulo3.png" alt="titulo" className='titulo' />
            <h2 className='sub2' >O recorde é: {recorde}</h2>
            <h2 className='sub2' >Sua pontuação final é: <span>{pontos}</span></h2>
            <div className="botoes">
                <button className='botInicio' onClick={fechar}>Finalizar jogo</button>
                <button className='botInicio' onClick={recomecar}>Recomeçar</button>
            </div>
        </div>
    );
};

export default TerminoJogo;
