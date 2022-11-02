import React from 'react';
import { Form } from 'react-final-form';

const Root = () => {

    return (
        <Form onSubmit={() => {
            console.log('submitted');
        }}> 
            {props => (
                <form>
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