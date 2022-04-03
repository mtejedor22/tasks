import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { Question } from "../interfaces/question";

export function QuestionOne({ question }: { question: Question }): JSX.Element {
    const [name, setName] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div key={question.id} className="bg-light border m-2 p-2">
            <div key={question.id} className="bg-light border m-2 p-2">
                {question.type === "short_answer_question" ? (
                    <Form.Group controlId="formCheckAnswer">
                        <Form.Label>Check your Answer:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                ) : (
                    <div>
                        <Form.Check
                            type="radio"
                            name="options"
                            onChange={updateName}
                            id="options-check-0"
                            label={question.options[0]}
                            value={question.options[0]}
                            checked={name === question.options[0]}
                        />
                        <Form.Check
                            type="radio"
                            name="options"
                            onChange={updateName}
                            id="options-check-1"
                            label={question.options[1]}
                            value={question.options[1]}
                            checked={name === question.options[1]}
                        />
                        <Form.Check
                            type="radio"
                            name="options"
                            onChange={updateName}
                            id="options-check-2"
                            label={question.options[2]}
                            value={question.options[2]}
                            checked={name === question.options[2]}
                        />
                    </div>
                )}
            </div>
            Your answer is {name === question.expected ? "✔️" : "❌"}.
        </div>
    );
}
