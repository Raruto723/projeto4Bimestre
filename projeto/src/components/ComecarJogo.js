import './comecarJogo.css';

const ComecarJogo = ({ iniciarJogo }) => {
    const recorde = localStorage.getItem('recorde');
    return (
        <div className='start'>
            <img src="img/titulo4.png" alt="titulo" className="titulo" />
            <img src="img/lucky.gif" alt="gif" className="gif" />
            <h1>Guess the Number</h1>
            <h2>Tente bater o recorde de {recorde} pontos</h2>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={iniciarJogo}>Começar jogo</button>
        </div>
    );
}

export default ComecarJogo;
