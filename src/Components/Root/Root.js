import React from 'react';
import { Form } from 'react-final-form';

const Root = () => {
    
    return (
        <Form onSubmit={() => {
            alert("testing");
        }}>
            {props => (
                <form onSubmit={props.handleSubmit}>

                </form>
            )}
        </Form>
    )
}

export default Root;