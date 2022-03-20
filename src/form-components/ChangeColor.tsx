import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "blue",
    "yellow",
    "pink",
    "purple",
    "green",
    "red",
    "orange",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [choosen, setChosen] = useState<string>(COLORS[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: choosen }}
                >
                    The current color is{" "}
                    <span style={{ backgroundColor: choosen, color: "black" }}>
                        {choosen}
                    </span>
                </div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        type="radio"
                        name="colors"
                        key={color}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setChosen(event.target.value)}
                        inline
                        id={"colors-choice-" + color}
                        label={
                            <span
                                style={{
                                    backgroundColor: color,
                                    color: "black"
                                }}
                            >
                                {color}
                            </span>
                        }
                        value={color}
                        checked={color === choosen}
                    />
                ))}
            </div>
        </div>
    );
}
