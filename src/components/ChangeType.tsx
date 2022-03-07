import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [typequstion, setChange] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeTypeQuestion(): void {
        setChange(
            // If it's red, make it green
            typequstion === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <Button onClick={changeTypeQuestion}>Change Type</Button>
            {typequstion === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
