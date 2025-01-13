import { useState } from "react";
import './Emoji.css';
import Atributo from "./Atributo";

const EMOJIS = new Map<string,string>(
    [
        ["happy", "😀"],
        ["sick", "🤢"],
        ["dead", "😵"],
    ]
);



export default function Emoji(){
    const [situacao, setSituacao] = useState("dead");

    function onAlimentar(){
        console.log(`to Happy!"${situacao}`);
        setSituacao("happy");
        console.log(`to Happy!"${situacao}`);
    }

    function onHidratar(){
        console.log(`to Dead!${situacao}`);
        setSituacao("dead");
    }
    function onLigaDesligaLuz(){
        console.log(`to Sick!${situacao}`);
        setSituacao("sick");
    }
    function onCiclo(){
        console.log(`to Sick!${situacao}`);
        setSituacao("sick");
    }
    

    return (
        <div className="emoji">
            <div className="face">{EMOJIS.get(situacao) || "☠️"}</div>
            <div className="acoes">
                <button onClick={onAlimentar}>Dar Comida</button>
                <button onClick={onHidratar}>Dar água</button>
                <button onClick={onLigaDesligaLuz}>Liga/Desligar a luz</button>
                <button onClick={onCiclo}>Ciclo</button>
            </div>
            <div className="atributos">
                <Atributo icone = "❤️" valor={3}></Atributo>
                <Atributo icone = "⚡" valor={3}></Atributo>
                <Atributo icone = "🍗" valor={3}></Atributo>
                <Atributo icone = "💧" valor={3}></Atributo>
            </div>
        </div>
    );
    }