import React from "react";
import { render, screen } from "@testing-library/react";
import { QuestionOne } from "./QuestionOne";
import QUESTIONS from "../data/questions.json";
import userEvent from "@testing-library/user-event";
import { Question } from "../interfaces/question";

describe("QuestionOne Component tests", () => {
    test("There is an input box", () => {
        render(
            <QuestionOne
                question={QUESTIONS["SIMPLE_QUESTIONS"][0] as Question}
            />
        );
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();
    });
    test("The answer is originally incorrect.", () => {
        <QuestionOne question={QUESTIONS["SIMPLE_QUESTIONS"][0] as Question} />;
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Entering the right answer makes it correct.", () => {
        render(
            <QuestionOne
                question={QUESTIONS["SIMPLE_QUESTIONS"][0] as Question}
            />
        );
        const inputBox = screen.getByRole("textbox");
        userEvent.type(inputBox, "4");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Entering the wrong answer makes it incorrect.", () => {
        render(
            <QuestionOne
                question={QUESTIONS["SIMPLE_QUESTIONS"][0] as Question}
            />
        );
        const inputBox = screen.getByRole("textbox");
        userEvent.type(inputBox, "43");
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Entering a different question makes it correct.", () => {
        render(
            <QuestionOne
                question={QUESTIONS["SIMPLE_QUESTIONS"][2] as Question}
            />
        );
        const inputBox = screen.getByRole("radio");
        userEvent.type(inputBox, "red");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Entering a different wrong answer still makes it incorrect.", () => {
        render(
            <QuestionOne
                question={QUESTIONS["SIMPLE_QUESTIONS"][2] as Question}
            />
        );
        const inputBox = screen.getByRole("radio");
        userEvent.type(inputBox, "apple");
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
});
