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
    const [saude, setSaude] = useState(4);
    const [energia, setEnergia] = useState(3);
    const [agua, setAgua] = useState(2);
    const [comida, setComida] = useState(1);

    function onAlimentar(){
        setComida(comida === 5 ? comida : comida + 1);
    }

    function onHidratar(){
        setAgua( agua === 5 ? agua : agua + 1);
    }
    function onLigaDesligaLuz(){
    }
    function onCiclo(){
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
                <Atributo icone = "❤️" valor={saude}></Atributo>
                <Atributo icone = "⚡" valor={energia}></Atributo>
                <Atributo icone = "🍗" valor={comida}></Atributo>
                <Atributo icone = "💧" valor={agua}></Atributo>
            </div>
        </div>
    );
    }