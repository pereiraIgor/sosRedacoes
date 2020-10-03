import React,{ useState,useEffect } from 'react';

function Botoes() {
    const [check, setCheck] = useState(false);
    const change = () => setCheck(!check);
    
    function handleClick(e) {
        e.preventDefault();
        console.log('O link foi clicado.');
      }
    return (
    <div>


<p>
    <input type="checkbox" defaultChecked={check} onChange={change} />
    {check && <span>on</span> || <span>off</span>}
</p>

        <button>Ver Mais</button>
        
        <button>Salvar Tema</button>
        
        <button >Curtir</button>

    </div>
  );
}

export default Botoes;

