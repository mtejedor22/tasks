import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setnumAttempts] = useState<number>(4);
    const [inProgress, setinProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setinProgress(true);
        setnumAttempts(numAttempts - 1);
    }
    function stopQuiz(): void {
        setinProgress(false);
    }
    function Attempt(): void {
        setnumAttempts(numAttempts + 1);
    }
    return (
        <div>
            <div>Start Attempt</div>
            <div> {numAttempts} </div>
            <Button
                disabled={inProgress || numAttempts === 0}
                onClick={startQuiz}
            >
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={stopQuiz}>
                Stop Quiz
            </Button>

            <Button disabled={inProgress} onClick={Attempt}>
                Mulligan
            </Button>
        </div>
    );
}
