import React, { Component } from 'react';
import Botoes from './Botoes';

function ResumoRedacao(props) {
  return (
    <ul>
    <li>Nome:{props.name} </li>
    <b>Tema:</b>{props.tema}<br />
    {props.resumo}
    <Botoes></Botoes>
    </ ul>
    
  );

}

export default ResumoRedacao;
