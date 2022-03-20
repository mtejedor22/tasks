import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    // This is the State (Model)
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // This is the Control
    function changeMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    // This is the View
    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="is-Edit-Mode"
                    label="Edit Mode"
                    checked={isEditMode}
                    onChange={changeMode}
                />
            </div>
            <div>
                {isEditMode && (
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="notStudent"
                        disabled={!isEditMode}
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                )}
            </div>
            <div>
                {isEditMode && (
                    <Form.Group controlId="formStudentName">
                        <Form.Control
                            disabled={!isEditMode}
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                )}
            </div>
            {isStudent ? (
                <span>{name} is a student.</span>
            ) : (
                <span>{name} is not a student.</span>
            )}
        </div>
    );
}
