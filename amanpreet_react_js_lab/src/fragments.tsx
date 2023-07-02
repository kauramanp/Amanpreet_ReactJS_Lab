import React, { Fragment } from 'react';

const fruitsEL = (
    < Fragment >
        <li>Apple</li>
        <li>Banana</li>
    </Fragment >
);


const veggieEL = (
    < Fragment >
        <li>Potato</li>
        <li>Tomato</li>
    </Fragment >
);

const shoppingList = (
    <ul>
        {fruitsEL},
        {veggieEL}
    </ul >
);

export default shoppingList;