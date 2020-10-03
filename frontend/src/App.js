import React,{ useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ResumoRedacao from './ResumoRedacao';


function App() {

    return (
    <div>

    <h1>SOS Redações</h1>
    <h4>Bem Vindo de Volta, Senhor(a) Lourena</h4>
    <hr />
    <a href='local'>ir para qg das redaçoes</a>   &nbsp; &nbsp; &nbsp;
    <a href='local2'>Materias Para Se dar Bem</a>  &nbsp; &nbsp; &nbsp; 
    <a href='local'>Redações exemplares</a> &nbsp; &nbsp; &nbsp; 
    <a href='local2'>Contato </a> 
    
    <div>
        <div>
            <label for="ordena_tipo">Forma de Ordenação:</label>   
                <select name="ordenar" id="ordena-select">
                    <option value="">--O que você quer ver primeiro--</option>
                    <option value="Nota">Nota</option>
                    <option value="Tema">Tema</option>
                </select>
                <br /><br />
        </div>
        
        <form action="/action_page.php">
            <label for="fname">Algum tema especifico?</label>
            <input type="text" id="fname" placeholder="Palavra Chave" /><br /><br />
            <input type="submit" value="Pesquisar" />
        </form>
    
        <ResumoRedacao name="Igor Pereira" tema="O trabalho na construção da dignidade humana." resumo="Depois de inúmeras mudanças na sociedade, vive-se, hoje, um momento em que há, por parte de muitas pessoas, uma crescente busca pela realização profissional. Para elas, a profissão, muitas vezes, pode ter um grande significado na construção de sua identidade. Há, porém,...." />
        
        <ResumoRedacao name="Romero Brito" tema="O movimento imigratório para o Brasil no século XXI." resumo="O Brasil tem enfrentado, com frequência, problemas sérios e até constrangedores, como os elevados índices de violência, pobreza e corrupção – três mazelas fundamentais que servem para ilustrar uma lista bem mais longa. Porém, mesmo diante dessa triste realidade, boa parte dos brasileiros parece não se constranger – e, talvez, nem se incomodar –,...    " />
        
        <ResumoRedacao name="Liso S. Omos" tema="O movimento imigratório para o Brasil no século XXI." resumo='No final do século XX, o país passou por um período de grande prosperidade econômica que ficou conhecido como "Milagre econômico". O otimismo gerado por essa conjuntura traduziu-se em uma frase que permanece, até hoje, na cultura popular: "Brasil: o país do futuro". O crescente número de imigrantes que buscam terra tupiniquins...' />

    </div>
        <hr />
        <p><small>Site dedicado exclusivamente a dar melhor suporte a estudantes que almejam melhores notas em suas redações By:Igor Pereira</small></p>
    
</div>
  );
}













export default App;
