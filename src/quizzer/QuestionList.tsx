import React, { useState } from "react";
import { Question } from "../interfaces/question";
import { Container, Row, Col, Stack, Button, Form } from "react-bootstrap";
import { QuestionOne } from "./QuestionOne";
//import ghibli from "../data/questions.json";
//import { MovieView } from "./MovieView";

export function QuestionList({
    questions
}: {
    questions: Question[];
}): JSX.Element {
    const [name, setName] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <Stack gap={3}>
            {questions.map((question: Question) => {
                return (
                    <div key={question.id} className="bg-light border m-2 p-2">
                        <Container>
                            <Row>
                                <Col>
                                    <h3>{question.name}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{question.body}</p>
                                    <p>
                                        {question.type ===
                                        "multiple_choice_question"
                                            ? question.options.join(", ")
                                            : ""}
                                    </p>
                                    <p>Points: {question.points}</p>
                                </Col>
                                <Col>
                                    <QuestionOne
                                        question={question}
                                    ></QuestionOne>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                );
            })}
        </Stack>
    );
}
