import React from 'react';
import { Form } from 'react-final-form';
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units';

const Root = () => {
    const convert = configureMeasurements(allMeasures);

    return (
        <Form onSubmit={() => {
            console.log(a);

        }}> 
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <lable>
                        <input type="text" placeholder='Km' />
                        <input type="text" placeholder='metters' />
                        <button name="text">name</button>
                    </lable>   
                </form>
            )}
        </Form>
    )
}

export default Root;