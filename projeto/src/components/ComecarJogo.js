import './comecarJogo.css';

const ComecarJogo = ({ iniciarJogo }) => {
    const recorde = localStorage.getItem('recorde');
    return (
        <div className='start'>
            <img src="img/titulo1.png" alt="titulo" className="titulo" />
            <img src="img/sonic3.gif" alt="gif" className="gif1" />
            <h2 className='sub1' >Tente bater o recorde de {recorde} pontos!</h2>
            <p className='sub1' >Clique no botão abaixo para começar a jogar</p>
            <button onClick={iniciarJogo} className='botInicio'>Começar jogo</button>
        </div>
    );
}

export default ComecarJogo;
