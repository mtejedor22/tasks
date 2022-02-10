import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript.
            </header>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "100%",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <h2 style={{ padding: "10px" }}>
                            My first Web Application!
                        </h2>
                        <p>
                            Hey my name is Mar! Im so exited to take this
                            class!!!
                        </p>
                        <p>Hello World!</p>
                        <ul style={{ textAlign: "left" }}>
                            <li>Name: Mar Tejedor</li>
                            <li>Course: Computer Science</li>
                            <li>Year: Spring 2022</li>
                            <li>Class: Sophomore</li>
                        </ul>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "100%",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <img
                            style={{ height: "150px", padding: "15px" }}
                            src="https://upload.wikimedia.org/wikipedia/commons/7/72/Basketball_Clipart.svg"
                            alt="A picture of a basketball ball"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
