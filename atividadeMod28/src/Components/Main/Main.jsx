import { useState } from 'react'
import styles from './Main.module.css'

function Header ({}){
    
    const [botaoAbrirCalc, setBotaoAbrirCalc] = useState(false);
    const [botaoResultado, setBotaoResultado] = useState(false);
    const [valorAltura, setValorAltura] = useState(0);
    const [valorPeso, setValorPeso] = useState(0);
    const [valorImc, setValorImc] = useState(0);

    function clickOpenCalc(){
        setBotaoAbrirCalc(true);
    }
    function calculaImc(){
        setValorImc(valorPeso/(valorAltura^2));
    }
    function determinaGrupoImc(){
        if(valorImc<16.9){
            return <b>Muito Abaixo do Peso</b>
        }
        if(valorImc>=18.5||valorImc<=18.4){
            return <b>Abaixo do Peso</b>
        }
        if(valorImc>=18.5||valorImc<=24.9){
            return <b>Peso Normal</b>
        }
        if(valorImc>=25||valorImc<=29.9){
            return <b>Acima do Peso</b>
        }
        if(valorImc>=30||valorImc<=34.9){
            return <b>Obesidade grau I</b>
        }
        if(valorImc>=35||valorImc<=40){
            return <b>Obesidade grau II</b>
        }
        if(valorImc>40){
            return <b>Obesidade grau III</b>
        }
    }
    function clickBtnResultado(){
        setBotaoResultado(true);
    }
    return (
        <>
            <div className={styles.divContainerHeader}>
                <h3>Insira seu nome e aperte o botão para abrir a calculadora de IMC</h3>
                <input className={styles.inputHeader} type="text" placeholder="Nome Completo"/>
                <button onClick={clickOpenCalc}>ABRIR CALCULADORA</button>
            </div>

            <div className={styles.containerCalculo}>
                <h1>Olá Gabriel Lisboa</h1>
                <h3>Insira os dados abaixo para calcular seu IMC</h3>
                <div  style={{marginTop:30}}>
                    <input className={styles.inputDados} type="number" placeholder='ALTURA' onChange={ (e) => {setValorAltura(parseFloat(e.target.value))} }/>
                </div>
                <div style={{marginTop:18}}>
                    <input className={styles.inputDados} type="number" placeholder='PESO' onChange={ (e) => {setValorPeso(parseFloat(e.target.value))} }/>
                </div>
                <button onClick={clickBtnResultado}>CALCULAR</button>
            </div>
            
            {botaoResultado ? 
                <div className={styles.containerResultado}>
                    <h3>O valor do seu IMC é {calculaImc} </h3>
                    <h4>Você está classificado como {determinaGrupoImc} </h4>
                </div> 
                : <p>Aguardando inserção dos dados</p> 
            }
        </>
    )
}

export default Header