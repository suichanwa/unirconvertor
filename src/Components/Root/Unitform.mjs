import React from "react";
import { Form } from "react-bootstrap";

const Unitform = () => {
    //create a form with two fields that containe kg and lbs
    return (
        <Form>
            <Form.Group controlId="kg">
                <Form.Label> Select something</Form.Label>
                    <Form.Group controlId="basic">
                        <Form.Select name="select" onChange={console.log("select")}>
                            <option value="1">kg</option>
                            <option value="2">lbs</option>
                        </Form.Select>
                    </Form.Group>
            </Form.Group>
        </Form>
    )
}

export default Unitform;
