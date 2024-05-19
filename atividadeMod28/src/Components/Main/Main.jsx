import { useState } from 'react'
import styles from './Main.module.css'

function Main ({}){
    const [nomeUsuario, setNomeUsuario] = useState(null);
    const [botaoAbrirCalc, setBotaoAbrirCalc] = useState(false);
    const [telaInicialAberta, setTelaInicialAberta] = useState(true);
    const [valorAltura, setValorAltura] = useState('');
    const [valorPeso, setValorPeso] = useState('');
    const [valorImc, setValorImc] = useState(null);
    const [classificacaoTabela, setClassificacaoTabela] = useState('')

    function clickOpenCalc(){
        if(nomeUsuario != null){
            setBotaoAbrirCalc(true);
            setTelaInicialAberta(false);
        } else {
            alert("Insira seu nome!")
        }
    }

    function calcularImc(peso, altura){
        if(peso>0 && altura>0){
            return (peso/(altura*altura)).toFixed(2);
        } else{
            alert("Insira os dados de forma correta!")
        }
    }

    const mudarValorImc = () =>{
            const imcCalculado = calcularImc(parseFloat(valorPeso), parseFloat(valorAltura)); 
            setValorImc(imcCalculado);
            if(imcCalculado<16.9){
                setClassificacaoTabela(<b>Muito Abaixo do Peso</b>)
            }
            else if(imcCalculado>=18.5 && imcCalculado<=18.4){
                setClassificacaoTabela(<b>Abaixo do Peso</b>)
            }
            else if(imcCalculado>=18.5 && imcCalculado<=24.9){
                setClassificacaoTabela(<b>Peso Normal</b>)
            }
            else if(imcCalculado>=25 && imcCalculado<=29.9){
                setClassificacaoTabela(<b>Acima do Peso</b>)
            }
            else if(imcCalculado>=30 && imcCalculado<=34.9){
                setClassificacaoTabela(<b>Obesidade grau I</b>)
            }
            else if(imcCalculado>=35 && imcCalculado<=40){
                setClassificacaoTabela(<b>Obesidade grau II</b>)
            }
            else if(imcCalculado>40){
                setClassificacaoTabela(<b>Obesidade grau III</b>)
            }
        }

    function chamaResultado(){
        mudarValorImc();
        determinaGrupoImc();
    }

    return (
        <>
        {telaInicialAberta && (
            <div className={styles.divContainerHeader}>
                <h3>Insira seu nome e aperte o botão para abrir a calculadora de IMC</h3>
                <input className={styles.inputHeader} type="text" placeholder="Nome Completo" required onChange={ (e) => {setNomeUsuario(e.target.value)} }/>
                <button onClick={clickOpenCalc}>ABRIR CALCULADORA</button>
            </div>
        )}

            {botaoAbrirCalc && (
            <div className={styles.containerCalculo}>
                <h1>Olá {nomeUsuario}</h1>
                <h3>Insira os dados abaixo para calcular seu IMC</h3>
                <div  style={{marginTop:30}}>
                    <input className={styles.inputDados} type="number" placeholder='ALTURA(m)' required onChange={ (e) => {setValorAltura(parseFloat(e.target.value))} }/>
                </div>
                <div style={{marginTop:18}}>
                    <input className={styles.inputDados} type="number" placeholder='PESO(kg)' required onChange={ (e) => {setValorPeso(parseFloat(e.target.value))} }/>
                </div>
                <button onClick={chamaResultado}>CALCULAR</button>
            </div>
            )}
            
            {valorImc && (
                <div className={styles.containerResultado}>
                    <h3>O valor do seu IMC é {valorImc} </h3>
                    <h4>Você está classificado como {classificacaoTabela} </h4>
                </div> 
            ) 
            }
        </>
    )
}

export default Main