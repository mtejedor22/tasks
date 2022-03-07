import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "REIS" | "ANIVERSARI" | "STJORDI" | "DIMONI" | "CASTANYADA";

    const wordAlphabet: Record<Holiday, Holiday> = {
        REIS: "ANIVERSARI",
        ANIVERSARI: "STJORDI",
        STJORDI: "DIMONI",
        DIMONI: "CASTANYADA",
        CASTANYADA: "REIS"
    };

    const wordOrder: Record<Holiday, Holiday> = {
        REIS: "STJORDI",
        ANIVERSARI: "CASTANYADA",
        STJORDI: "ANIVERSARI",
        DIMONI: "REIS",
        CASTANYADA: "DIMONI"
    };
    const [word, setword] = useState<Holiday>("REIS");
    function nextWordAlphabet(): void {
        setword(wordAlphabet[word]);
    }
    function nextWordOrder(): void {
        setword(wordOrder[word]);
    }
    return (
        <div>
            <div>Cycle Holiday</div>
            <Button onClick={nextWordAlphabet}>Advance by Alphabet</Button>
            <Button onClick={nextWordOrder}>Advance by Year</Button>
            <div>
                {word === "REIS" ? (
                    <span> Holiday: 👑 </span>
                ) : word === "ANIVERSARI" ? (
                    <span> Holiday: 🎂 </span>
                ) : word === "STJORDI" ? (
                    <span> Holiday: 🌹 </span>
                ) : word === "DIMONI" ? (
                    <span> Holiday: 👹 </span>
                ) : word === "CASTANYADA" ? (
                    <span> Holiday: 🌰 </span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
