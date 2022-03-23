import {ExposedContext} from 'app1/exposed-context';
import React from 'react';

const Welcome = () => {
    const name = React.useContext(ExposedContext);

    return (
        <p>Welcome, {name}</p>
    );
};

export default Welcome;
