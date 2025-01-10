//import { useState } from "react";

import { useState } from "react";

type AtributoProps = {
    icone: string;
}

export default function Atributo(){

    const [valor, setValor] = useState (3);

    function onMaisClick(){
        if(valor === 5){
            setValor(0);
        }
        else {
            setValor(valor+1);
        }
    }

    return(
        <div className="atributo">
            <span>{"X".repeat(valor)}</span>
            <span>{"_".repeat(5 - valor)}</span>
            <button onClick={onMaisClick}>+</button>
        </div>

    );
}