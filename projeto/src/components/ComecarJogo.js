import './comecarJogo.css'

const ComecarJogo = ({iniciarJogo}) => {
    return (
        <div className='start'>
            <img src="img/titulo4.png" alt="titulo" className="titulo" />
            <img src="img/lucky.gif" alt="gif" className="gif" />
            <h1>Guess the Number</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={iniciarJogo} >Começar jogo</button>
        </div>
    )
}

export default ComecarJogo;