import { useState } from "react";
import './Emoji.css';

const EMOJIS = new Map<string,string>(
    [
        ["happy", "😀"],
        ["sick", "🤢"],
        ["dead", "😵"],
    ]
);



export default function Emoji(){
    const [situacao, setSituacao] = useState("dead");

    function toHappy(){
        console.log(`to Happy!"${situacao}`);
        setSituacao("happy");
        console.log(`to Happy!"${situacao}`);
    }

    function toDead(){
        console.log(`to Dead!${situacao}`);
        setSituacao("dead");
    }
    function toSick(){
        console.log(`to Sick!${situacao}`);
        setSituacao("sick");
    }

    return (
        <div className="emoji">
            <div className="face">{EMOJIS.get(situacao) || "☠️"}</div>
            <div className="acoes">
                <button onClick={toHappy}>Vivo</button>
                <button onClick={toDead}>Morto</button>
                <button onClick={toSick}>Doente</button>

            </div>
        </div>
    );
    }