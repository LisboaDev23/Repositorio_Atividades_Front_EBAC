<script setup>
import { reactive } from 'vue';

const titulo = "CALCULADORA ARITMÉTICA"
const estado = reactive({
  operacao: "",
  valorInp1:"",
  valorInp2:"",
  resultado: 0
})

function efetuarOperacao(){
  const {operacao} = estado;
  switch (operacao){
    case "somar":
      return estado.resultado = estado.valorInp1 + estado.valorInp2;

    case "diminuir":
      return estado.resultado = estado.valorInp1 - estado.valorInp2;

    case "multiplicar" :
      return estado.resultado = estado.valorInp1 * estado.valorInp2;

    case "dividir" :
      return estado.resultado = estado.valorInp1 / estado.valorInp2;

    case "potencia" :
      return estado.resultado = Math.pow(estado.valorInp1, estado.valorInp2);
  }
}
</script>

<template>

<div class="container">
  <header>
    <h1>{{ titulo }}</h1>
  </header>

  <div class="main">
    <div class="inputs">
      
      <input @keyup="evento => estado.valorInp1 = parseFloat(evento.target.value)" type="number" placeholder="Insira um número">
      
      <select @change="evento => estado.operacao = evento.target.value">
        <option value="nenhuma">Escolha</option>
        <option value="somar">+</option>
        <option value="diminuir">-</option>
        <option value="multiplicar">*</option>
        <option value="dividir">/</option>
        <option value="potencia">^</option>
      </select>

      <input @keyup="evento => estado.valorInp2 = parseFloat(evento.target.value)" type="number" placeholder="Insira um número">

      <div class="resultado">
        <p>{{ efetuarOperacao() }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.container{
  max-width: 680px;
  margin: 0 auto;
}
header{
  text-align: center;
}
.main{
  text-align: center;
}
select{
  margin: 0 34px;
}

input{
    padding: 12px;
    border-radius: 16px;
    text-align: center;
}

</style>
