import './Atributo.css'

import { useState } from "react";

type AtributoProps = {
    icone : string;
}

export default function Atributo({icone}:AtributoProps){

    

    const [valor, setValor] = useState (3);

    function onMaisClick(){
        setValor ((v) => (v === 5 ? 0 : v + 1 ));
    }

    return(
        <div className="atributo">
            <span>{icone.repeat(valor)}</span>
            <span className="inativo">{icone.repeat(5 - valor)}</span>
            <button onClick={onMaisClick}>+</button>
        </div>

    );
}