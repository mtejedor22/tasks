import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // This is the State (Model)
    const [option, setOption] = useState<string>(options[0]);

    // This is the Control
    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="MultipleChoiceQuestion">
                <Form.Label>Multiple Choice Question</Form.Label>
                <Form.Select value={option} onChange={updateOption}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>Your answer is {option === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}
