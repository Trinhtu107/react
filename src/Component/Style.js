import React, { Component } from 'react';
import styled  from 'styled-components';

const Button = styled.button`
         background: ${props => props.primary ? "palevioletred" : "white"};
                color: ${props => props.primary ? "white" : "palevioletred"};
                font-size: 1em;
                margin: 1em;
                padding: 0.25em 1em;
                border: 2px solid palevioletred;
                border-radius: 3px;
        `;

const Text = styled.text`
         background: ${props => props.primary ? "palevioletred" : "white"};
                color: ${props => props.primary ? "white" : "palevioletred"};
                font-size: 1em;
                margin: 1em;
                padding: 0.25em 1em;
                border: 2px solid palevioletred;
                border-radius: 3px;
        `;

function button() {
    return (
        <div>
            <Button>Normal</Button>
            <Button primary>Primary</Button>

            <Text/>
        </div>
    );
}
export default button;