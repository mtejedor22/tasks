import { Question } from "./question";

/** A representation of a Question in a quizzing application */
export interface Quiz {
    /** A unique identifier for the question */
    id: number;
    /** The human-friendly title of the question */
    name: string;
    /** The instructions and content of the Question */
    numquestions: number;
    /** The kind of Question; influences how the user answers and what options are displayed */
    questions: Question[];
}
