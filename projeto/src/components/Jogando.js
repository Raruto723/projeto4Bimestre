import './jogando.css'
const Jogando = () => {
    const tentativas = 7
    const enviarTentativa = () => {

    }
    return (
        <div className="App">
            <img src="img/titulo4.png" alt="titulo" className="titulo" />
            <img src="img/lucky.gif" alt="gif" className="gif" />
            <form>
                <label htmlFor="escolha">
                    Digite um número de 1 até 100:
                    <input type="number" name="escolha" id="escolha" min={1} max={100}/>
                </label>
                <button type="submit" onClick={enviarTentativa}>Submeter</button>
            </form>
            <p>Chances restantes: {tentativas} </p>
            <textarea name="numSorteado" id="sorteado" readOnly rows={10} cols={30}>
                O número sorteado foi:
            </textarea>
        </div>
    );
};

export default Jogando;
