import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [oneDice, setoneDice] = useState<number>(1);
    const [twoDice, settwoDice] = useState<number>(6);

    function set1(): void {
        setoneDice(d6);
    }
    function set2(): void {
        settwoDice(d6);
    }
    return (
        <div>
            <div>Two Dice</div>
            <Button onClick={set1}>Roll Left</Button>
            <span data-testid="left-die">{oneDice}</span>
            <Button onClick={set2}>Roll Right</Button>
            <span data-testid="right-die">{twoDice}</span>
            {oneDice === 1 && twoDice === 1 && oneDice === twoDice ? (
                <div> Lose </div>
            ) : (
                <div> null </div>
            )}
            {oneDice !== 1 && twoDice !== 1 && oneDice === twoDice ? (
                <div> Win </div>
            ) : (
                <div> null </div>
            )}
        </div>
    );
}
