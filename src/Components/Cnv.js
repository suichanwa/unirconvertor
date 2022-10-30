import React from "react";
import { Form } from "react-final-form";

const Cnv = () => {
    return (
    <Form
      onSubmit={(values) => {
        console.log(values);
      }}
    >
        <input placeholder="name" type="text">test</input>
    </Form>
    )
}

export default Cnv;