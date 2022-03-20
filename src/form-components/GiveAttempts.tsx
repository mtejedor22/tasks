import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setnumAttempts] = useState<number>(3);
    const [numberAttemptsReq, setNumberAttemptsReq] = useState<string>("");
    const newNumAttemps = parseInt(numberAttemptsReq) || 0;

    function startQuiz(): void {
        setnumAttempts(numAttempts - 1);
    }
    function AddAttempts(): void {
        setnumAttempts(numAttempts + newNumAttemps);
    }

    return (
        <div>
            Number of Attemps: {numAttempts}.
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Released:</Form.Label>
                <Form.Control
                    type="number"
                    value={numberAttemptsReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNumberAttemptsReq(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button disabled={numAttempts === 0} onClick={startQuiz}>
                    Use
                </Button>
                <Button onClick={AddAttempts}>Gain</Button>
            </div>
        </div>
    );
}
