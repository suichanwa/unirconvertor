import React from "react";
import { Form } from "react-final-form";

const Convertform = () => {
    const handeSubmit = () => {
        console.log("Convert form submitted");
    }

    return(
        <Form onSubmit={() => {
            console.log("tetisng");
        }}>
            {({ handleSubmit }) => (
                <form onSubmit={ handeSubmit }>
                    <input placeholder="first" type="text"></input>
                    +
                    <input placeholder="last" type="text"></input>
                    <button type="submit">Submit</button>
                </form>
            )}
        </Form>
    )
}

export default Convertform;
