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
    const [luz, setLuz] = useState(true);


    
    function onAlimentar(){
        setComida(Math.min(comida + 1, 5));
    }

    function onHidratar(){
        setAgua(Math.min(agua + 1, 5));
    }
    function onLigaDesligaLuz(){
        setLuz(!luz);
    }

    function onCiclo(){

            setComida(Math.max (0, comida - 1));
            setAgua(Math.max(0, agua -1));
            
            if(luz){
                setEnergia(Math.max(0, energia - 1 ));
            }
            else{
                setEnergia(Math.max(0, energia + 1 ));
            }
            if(comida === 0)
                setSaude(prevSaude => Math.max (0, prevSaude - 1));
            if(agua === 0)
                setSaude(prevSaude => Math.max (0, prevSaude - 1));
            if(energia === 0)
                setSaude(prevSaude => Math.max (0, prevSaude - 1));
    }
    
    return (
        <div className="emoji">
            <div className="face">{EMOJIS.get(situacao) || "☠️"}</div>
            <div className="acoes">
                <button onClick={onAlimentar}>Dar Comida</button>
                <button onClick={onHidratar}>Dar água</button>
                <button onClick={onLigaDesligaLuz}>{luz ? "Apagar" : "Acender"} a luz</button>
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