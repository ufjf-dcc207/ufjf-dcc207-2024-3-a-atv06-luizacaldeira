//import { useState } from "react";

import { useState } from "react";

export default function Atributo(){

    const [valor, setValor] = useState (0);

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
            <span>{valor}</span>
            <button onClick={onMaisClick}>+</button>
        </div>

    );
}