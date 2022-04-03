/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Container, Row, Stack } from "react-bootstrap";
import { QuestionList } from "./QuestionList";
import ghibli from "../data/questions.json";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";

const QUESTIONS1 = ghibli["SIMPLE_QUESTIONS"] as Question[];
const QUESTIONS2 = ghibli["SIMPLE_QUESTIONS_2"] as Question[];
const QUESTIONS3 = ghibli["TRIVIA_QUESTIONS"] as Question[];

const ALLQUIZZES: Quiz[] = [
    {
        id: 1,
        name: "Quiz 1",
        numquestions: QUESTIONS1.length,
        questions: [...QUESTIONS1]
    },
    {
        id: 2,
        name: "Quiz 2",
        numquestions: QUESTIONS2.length,
        questions: [...QUESTIONS2]
    },
    {
        id: 3,
        name: "Quiz 3",
        numquestions: QUESTIONS3.length,
        questions: [...QUESTIONS3]
    }
];

export function Quizzer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }
    return (
        <Stack gap={3}>
            {ALLQUIZZES.map((QUIZ: Quiz) => {
                return (
                    <div key={QUIZ.id} className="bg-light border m-2 p-2">
                        <Container>
                            <Row>
                                <h5 className="quiz">
                                    Quizz {QUIZ.id} ({QUIZ.numquestions}{" "}
                                    questions)
                                </h5>
                                <p className="quiz">Description</p>
                                <Button onClick={flipVisibility}>
                                    See Quiz
                                </Button>
                                {visible ? (
                                    <QuestionList
                                        questions={QUIZ.questions}
                                    ></QuestionList>
                                ) : (
                                    ""
                                )}
                            </Row>
                        </Container>
                    </div>
                );
            })}
        </Stack>
    );
}
