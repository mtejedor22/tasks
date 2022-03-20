import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [name, setName] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Check your Answer:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <div>Your answer is {name === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}
